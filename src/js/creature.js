var Creature = (function() {
  function Creature(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Creature.prototype.init = function(){
    this.ctx = this.opt.ctx;
    this.isTeaching = false;
    this.points = [];
    this.nodes = [];
    this.training = [];
    this.network = false;
    this.trained = false;
    this.activeNode = false;
    if (this.opt.type=='machine' && !this.opt.fake) {
      var layers = this.opt.network.hiddenLayers;
      this.network = new synaptic.Architect.LSTM(4,layers,layers,layers,4);
    }
    this.loadListeners();
  };

  Creature.prototype.addNodeData = function(nodes){
    if (!nodes.length) return false;

    this.nodes = _.map(nodes, function(n, i){ return {index: i, value: n}; });
  };

  Creature.prototype.addPoint = function(p){
    this.points.push(p);
  };

  Creature.prototype.addTrainingPoints = function(points){
    this.training.push(points);
  };

  Creature.prototype.clearPoints = function(){
    this.points = [];
  };

  Creature.prototype.forgetPoints = function(time){
    time = time || new Date();
    var ms = this.opt.strokeMs;

    this.points = _.reject(this.points, function(p){
      return (time - p.t) > ms;
    });
  };

  Creature.prototype.generate = function(){
    if (this.opt.fake) {
      this.generateFake();
      return true;
    }
    if (this.generating || !this.trained) return false;
    this.generating = true;

    var w = this.ctx.canvas.width;
    var h = this.ctx.canvas.height;
    var maxV = this.opt.maxVelocity;
    var gPoints = [];
    var t = 0;
    var input = [Math.random(), Math.random(), Math.random(), Math.random() / 4];
    var gPrev = false;
    var now = new Date();
    var path = this.training[_.random(0, this.training.length-1)];
    var strokeMs = this.opt.strokeMs;

    gPoints.push({
      x: input[0] * w,
      y: input[1] * h,
      z: 0,
      a: (input[2] - 0.5) * 360,
      v: input[3],
      t: now.getTime()
    });
    var i = 0;
    while(t < strokeMs && i < 1000) {
      var output = this.network.activate(input);
      // console.log(output)
      var d = UTIL.dist(input[0] * w, input[1] * h, output[0] * w, output[1] * h);
      var pxs = UTIL.lerp(0.01, maxV, output[3]);
      var s = (1/pxs) * d;
      t += s;
      // console.log(d, pxs)
      gPoints.push({
        x: output[0] * w,
        y: output[1] * h,
        z: 0,
        a: (output[2] - 0.5) * 360,
        v: output[3],
        t: new Date(now.getTime() + t)
      });
      input = output.slice(0);
      i++;
    }

    this.points = _.map(gPoints, _.clone);
    this.generateTime = new Date();
    this.generating = false;
  };

  Creature.prototype.generateFake = function(){
    if (this.training.length <= 0) return false;

    var w = this.ctx.canvas.width;
    var h = this.ctx.canvas.height;
    var maxV = this.opt.maxVelocity;
    var gPoints = [];
    var t = 0;
    var input = [0, 0, 0, 0];
    var gPrev = false;
    var now = new Date();
    var path = this.training[_.random(0, this.training.length-1)];

    // node has just been activated; make a stroke that is similar
    if (this.activeNode !== false && this.nodes.length) {

      var activeNode = this.activeNode;
      var nodePaths = _.filter(this.nodes, function(node, i){ return node.value==activeNode; });
      if (nodePaths.length) {
        var randomPath = nodePaths[_.random(0, nodePaths.length-1)];
        if (randomPath.index < this.training.length) {
          path = this.training[randomPath.index];
        }
      }
      this.activeNode = false;
    }

    _.each(path, function(point) {
      var pxs = UTIL.lerp(0, maxV, point.v);
      var gp = {
        x: point.x * w,
        y: point.y * h,
        z: 0,
        a: (point.a - 0.5) * 360,
        v: point.v,
        t: new Date(now.getTime() + t)
      };
      if (gPrev) {
        var d = UTIL.dist(gPrev.x, gPrev.y, gp.x, gp.y);
        var s = (1/pxs) * d;
        t += s;
      }
      gPoints.push(gp);
      gPrev = _.clone(gp);
      input = _.clone(point);
    });

    this.points = _.map(gPoints, _.clone);
    this.generateTime = new Date();
  };

  Creature.prototype.getLastLine = function(){
    var line = [];
    var visible = _.filter(this.points, function(p){ return p.z > 0; });
    if (visible.length > 1) {
      line = visible.slice(visible.length - 2);
    }
    return line;
  };

  Creature.prototype.getPointsNormal = function(points){
    points = points || this.points;

    var w = this.ctx.canvas.width;
    var h = this.ctx.canvas.height;
    var nPoints = [];
    _.each(points, function(p, i){
      var point = {
        x: p.x / w,
        y: p.y / h,
        a: p.a / 360 + 0.5,
        v: p.v
      };
      nPoints.push(point);
    });
    return nPoints;
  };

  Creature.prototype.getPoints = function(){
    return _.map(this.points, _.clone);
  };

  Creature.prototype.isActive = function(){
    if (this.points.length || this.isTeaching) return true;

    if (this.generateTime) {
      var now = new Date();
      if ((now - this.generateTime) < (this.opt.strokeMs + this.opt.restMs)) return true;
    }

    return false;
  };

  Creature.prototype.learn = function(points){
    var nPoints = this.getPointsNormal(points);

    if (this.opt.fake) {
      this.addTrainingPoints(nPoints);
      return true;
    }

    var network = this.network;

    _.each(nPoints, function(p, i){
      if (i > 0) {
        var prev = nPoints[i-1];
        network.activate([prev.x, prev.y, prev.a, prev.v]);
        network.propagate(0.3, [p.x, p.y, p.a, p.v]);
      }
    });

    return weights;
  };

  Creature.prototype.lerpPoints = function(){
    // if (this.isTeaching) return false;

    var now = new Date();
    var ms = this.opt.strokeMs;

    var validPoints = [];
    _.each(this.points, function(p, i){
      var lerp = 1.0 - (now - p.t) / ms;
      p.z = 0;
      if (lerp > 0 && lerp <= 1) {
        p.z = lerp;
      }
      if (lerp > 0) {
        validPoints.push(p);
      }

    });

    this.points = validPoints;
  };

  Creature.prototype.loadListeners = function(){
    var _this = this;

    if (this.opt.type=='machine') {
      $.subscribe('training.loaded', function(e, d){
        _this.loadTraining(_.map(d.data, _.clone));
      });

      $(window).on('storage', function(e){
        var event = e.originalEvent;

        if (event.key == 'node.activate') {
          var n = JSON.parse(localStorage.getItem('node.activate'));
          _this.activeNode = n.value;
          // console.log('node.activate', _this.activeNode);

        } else if (event.key == 'node.loaded') {
          var d = JSON.parse(localStorage.getItem('node.loaded'));
          _this.addNodeData(d.data);
        }
      });
    }
  };

  Creature.prototype.loadTraining = function(paths){
    if (this.opt.fake) {
      this.training = paths;
      this.trained = true;
      return true;
    }

    var trainingSet = [];
    _.each(paths, function(path){
      _.each(path, function(point, i) {
        if (i > 0) {
          var prev = path[i-1];
          trainingSet.push({
            input: [prev.x, prev.y, prev.a, prev.v],
            output: [point.x, point.y, point.a, point.v]
          });
        }
      });

    });
    var trainer = new synaptic.Trainer(this.network);
    trainer.train(trainingSet);
    this.trained = true;
  };

  Creature.prototype.onTeachingEnd = function(){
    this.isTeaching = false;
    // this.points = [];
    $.publish('creature.teach.finished', true);
  };

  Creature.prototype.render = function(){
    var now = new Date();

    if (this.isTeaching && this.points.length <= 0 && (now-this.teachTime) > this.opt.teachMs) {
      this.onTeachingEnd();

    } else {
      this.renderNormalState();
    }
  };

  Creature.prototype.renderNormalState = function(){
    var _this = this;
    var ctx = this.ctx;
    var color = this.opt.strokeColor.join(',');
    var width = this.opt.strokeWidth;

    _.each(this.points, function(p, i){
      _this.renderPoint(ctx, width, p.x, p.y, p.z, color);
    });
  };

  Creature.prototype.renderPoint = function(ctx, w, x, y, z, color){
    var half = w / 2;
    var quarter = half / 2;
    var radgrad = ctx.createRadialGradient(x, y, quarter*z, x, y, half*z);

    radgrad.addColorStop(0, 'rgba('+color+','+z+')');
    radgrad.addColorStop(0.5, 'rgba('+color+','+z/2+')');
    radgrad.addColorStop(1, 'rgba('+color+',0)');
    ctx.fillStyle = radgrad;
    ctx.fillRect(x-half*z, y-half*z, w*z, w*z);
  };

  Creature.prototype.renderTeachingState = function(now){

  };

  Creature.prototype.setPoints = function(points){
    this.points = points;
  };

  Creature.prototype.teach = function(creature){
    this.weights = creature.learn(this.points);
    this.isTeaching = true;
    this.teachTime = new Date();
  };

  return Creature;

})();

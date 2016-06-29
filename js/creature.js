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
    this.network = false;

    if (this.opt.type=='machine') {
      this.network = {};
    }
  };

  Creature.prototype.addPoint = function(p){
    this.points.push(p);
  };

  Creature.prototype.forgetPoints = function(time){
    time = time || new Date();
    var ms = this.opt.strokeMs;

    this.points = _.reject(this.points, function(p){
      return (time - p.t) > ms;
    });
  };

  Creature.prototype.generate = function(){
    var w = this.ctx.canvas.width;
    var h = this.ctx.canvas.height;
    var maxV = this.opt.maxVelocity;
    var gPoints = [];
    var t = 0;
    var input = [0, 0, 0, 0];
    var gPrev = false;
    var now = new Date();
    var path = TRAINING[_.random(0, TRAINING.length-1)];

    _.each(path, function(point) {
      var output = point.slice(0);
      var pxs = UTIL.lerp(0, maxV, output[3]);
      var gp = {
        x: output[0] * w,
        y: output[1] * h,
        z: 0,
        a: (output[2] - 0.5) * 360,
        v: output[3],
        t: new Date(now.getTime() + t)
      };
      if (gPrev) {
        var d = UTIL.dist(gPrev.x, gPrev.y, gp.x, gp.y);
        var s = (1/pxs) * d;
        t += s;
      }
      gPoints.push(gp);
      gPrev = _.clone(gp);
      input = output.slice(0);
    });

    this.points = _.map(gPoints, _.clone);
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
    return this.points.length || this.isTeaching;
  };

  Creature.prototype.learn = function(points){
    points = this.getPointsNormal(points);
    var prev = {x: 0, y: 0, a: 0, v: 0};
    var weights = [];

    _.each(points, function(p, i){
      var input = [prev.x, prev.y, prev.a, prev.v];
      var expected = [p.x, p.y, p.a, p.v];
      var output = [Math.random(), Math.random(), Math.random(), Math.random()];
      var diff = [];
      _.each(expected, function(a, j){
        diff.push(Math.abs(a - output[j]));
      });
      var weight = UTIL.mean(diff);
      weights.push(weight);
      prev = points[i];
    });

    return weights;
  };

  Creature.prototype.lerpPoints = function(){
    if (this.isTeaching) return false;

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

  Creature.prototype.onTeachingEnd = function(){
    this.isTeaching = false;
    this.points = [];
    $.publish('creature.teach.finished', true);
  };

  Creature.prototype.render = function(){
    var now = new Date();

    if (this.isTeaching && now < this.teachStart) {
      this.renderTransitionState(now);

    } else if (this.isTeaching && now > this.teachStop) {
      this.renderTransitionState(now);

    } else if (this.isTeaching) {
      this.renderTeachingState(now);

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
    var _this = this;
    var ctx = this.ctx;
    var colorRange = this.opt.strokeColorRangeTeach;
    var width = this.opt.strokeWidth;

    // determine transition progress
    var progress = UTIL.norm(now.getTime(), this.teachStart.getTime(), this.teachStop.getTime());
    var activeI = Math.floor(this.points.length * progress);


    _.each(this.points, function(p, i){
      if (i <= activeI) {
        var color = colorRange[0];
        var weight = _this.weights[i];
        if (weight) color = UTIL.lerpColor(colorRange[0], colorRange[1], weight);
        _this.points[i].color = color;
        _this.renderPoint(ctx, width, p.x, p.y, 1, color);

      } else {
        _this.renderPoint(ctx, width, p.x, p.y, _this.opt.transitionZ, _this.opt.strokeColorTransition);
      }
    });
  };

  Creature.prototype.renderTransitionState = function(now){
    var _this = this;
    var ctx = this.ctx;
    var colorRange = [this.opt.strokeColor, this.opt.strokeColorTransition];
    var timeRange = [this.transitionStart.getTime(), this.teachStart.getTime()];
    var width = this.opt.strokeWidth;
    var startZ = false;
    var targetZ = this.opt.transitionZ;
    var finishedTeaching = now > this.teachStart;

    if (finishedTeaching) {
      timeRange = [this.teachStop.getTime(), this.transitionStop.getTime()];
      targetZ = 0;
      startZ = 1;
    }

    // determine transition progress
    var progress = UTIL.norm(now.getTime(), timeRange[0], timeRange[1]);
    var length = this.points.length;
    var color = UTIL.lerpColor(colorRange[0], colorRange[1], progress);

    _.each(this.points, function(p, i){
      var z0 = startZ || p.z;
      var z = UTIL.lerp(z0, targetZ, progress);
      var c = p.color || color;
      _this.renderPoint(ctx, width, p.x, p.y, z, c);
    });

    if (finishedTeaching && progress >= 1) {
      this.onTeachingEnd();
    }
  };

  Creature.prototype.setPoints = function(points){
    this.points = points;
  };

  Creature.prototype.teach = function(creature){
    this.weights = creature.learn(this.points);

    // for animation
    this.transitionStart = new Date();
    this.teachStart = new Date(this.transitionStart.getTime() + this.opt.transitionMs);
    this.teachStop = new Date(this.teachStart.getTime() + this.opt.teachMs);
    this.transitionStop = new Date(this.teachStop.getTime() + this.opt.transitionMs);
    this.teachIncrementMs = this.opt.teachMs / this.points.length;
    this.teachIndex = 0;
    this.isTeaching = true;
  };

  return Creature;

})();

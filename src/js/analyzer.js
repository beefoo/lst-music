var Analyzer = (function() {
  function Analyzer(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Analyzer.prototype.init = function(){
    this.ctx = this.opt.ctx;
    this.paths = [];

    // init canvas
    this.onUpdate();
    // this.loadNodes();
    this.loadListeners();
  };

  Analyzer.prototype.activate = function(path){
    var distances = this.analyzePath(path);
    var len = distances.length;
    // var minD = _.min(distances);
    // var maxD = _.max(distances);
    // distances = _.map(distances, function(d, i){ return {index: i, value: UTIL.norm(d, minD, maxD)}; });
    distances = _.map(distances, function(d, i){ return {index: i, value: d}; });
    distances = _.sortBy(distances, function(d){ return d.value; });
    var weights = new Array(len);
    this.activationDate = new Date();

    _.each(distances, function(d, i){
      weights[d.index] = (1-d.value) / Math.pow(1.5, i);
    });

    _.each(this.nodes, function(node, i){
      node.activate(weights[i]);
    });
  };

  Analyzer.prototype.analyze = function(paths){
    var _this = this;

    // this.paths = _.map(paths, _.clone);

    var nPaths = _.map(paths, function(path){
      return _this.getValue(path);
    });

    var clusters = clusterfck.kmeans(nPaths, this.opt.nodeCount);
    this.loadNodes(clusters);
  };

  Analyzer.prototype.analyzePath = function(path){
    var nodes = this.nodes;
    var value = this.getValue(path);
    var minDistance = 1;
    var minNode = 0;
    var distances = [];

    // find the closest node
    _.each(nodes, function(node, i){
      var d = node.distance(value);
      if (d < minDistance) {
        minDistance = d;
        minNode = i;
      }
      distances.push(d);
    });

    // add value to closest node
    nodes[minNode].addValue(value);

    return distances;
  };

  Analyzer.prototype.getValue = function(path){
    var value = [0, 0, 0];
    var precision = 100;
    var len = path.length;

    _.each(path, function(point){
      var x = point.x * precision;
      var y = point.y * precision;
      var xy = y * precision + x;
      var p = xy / (precision*precision);
      value[0] += p;
      value[1] += point.a;
      value[2] += point.v;
    });

    return [value[0]/len, value[1]/len, value[2]/len];
  };

  Analyzer.prototype.isActive = function(){
    var nodeActive = false;
    for (var i=0; i<this.nodes.length; i++) {
      var n = this.nodes[i];
      if (n.isActive()) {
        nodeActive = true;
        break;
      }
    }
    return nodeActive;
  };

  Analyzer.prototype.loadListeners = function(){
    var _this = this;

    $.subscribe('training.loaded', function(e, d){
      _this.analyze(d.data);
    });

    $.subscribe('user.create.points', function(e, d){
      _this.activate(d.points);
    });

    $.subscribe('machine.create.points', function(e, d){
      _this.activate(d.points);
    });

    $(window).on('storage', function(e){
      var event = e.originalEvent;
      if (event.key == 'create.points') {
        _this.activate(JSON.parse(localStorage.getItem('create.points')));
      }
    });
  };

  Analyzer.prototype.loadNodes = function(clusters){
    var _this = this;
    var nodeCount = this.opt.nodeCount;
    var perRow = this.opt.perRow;
    var nodeOpt = this.opt.node;
    var position = _.clone(this.pos);
    var ctx = this.ctx;

    // console.log(clusters)

    this.nodes = [];
    _(nodeCount).times(function(i){
      var values = [];
      if (clusters[i]) values = clusters[i].slice(0);
      _this.nodes.push(new Node(_.extend({index: i, ctx: ctx, perRow: perRow, parent: position, values: values}, nodeOpt)));
    });
  };

  Analyzer.prototype.onUpdate = function(){
    this.canvasWidth = this.ctx.canvas.width;
    this.canvasHeight = this.ctx.canvas.height;
    var pos = {x: 0, y: 0};
    var perRow = this.opt.perRow;

    // determine width and height
    pos.width = this.opt.width * this.canvasWidth;
    var nodeW = pos.width / perRow;
    var rows = Math.ceil(this.opt.nodeCount / perRow);
    pos.height = nodeW * rows;

    // determine x and y
    pos.x = this.opt.position[0] * this.canvasWidth;
    pos.y = this.opt.position[1] * this.canvasHeight;

    pos.x = _.max([0, pos.x - pos.width]);
    pos.y = _.max([0, pos.y - pos.height]);

    this.pos = pos;
  };

  Analyzer.prototype.render = function(){
    var rest = false;
    if (this.activationDate) {
      var t = new Date();
      if ((t - this.activationDate) > this.opt.restAfter) {
        rest = true;
        this.activationDate = false;
      }
    }
    _.each(this.nodes, function(n){
      if (rest) n.rest();
      n.render();
    });
  };

  Analyzer.prototype.resize = function(){
    var _this = this;
    this.onUpdate();

    _.each(this.nodes, function(n){
      n.resize(_.clone(_this.pos));
    });
  };

  return Analyzer;

})();

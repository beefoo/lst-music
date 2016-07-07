var Analyzer = (function() {
  function Analyzer(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Analyzer.prototype.init = function(){
    this.ctx = this.opt.ctx;

    // init canvas
    this.onUpdate();

    this.loadNodes();
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

  Analyzer.prototype.loadNodes = function(){
    var _this = this;
    var nodeCount = this.opt.nodeCount;
    var perRow = this.opt.perRow;
    var nodeOpt = this.opt.node;
    var position = _.clone(this.pos);
    var ctx = this.ctx;

    this.nodes = [];
    _(nodeCount).times(function(i){
      _this.nodes.push(new Node(_.extend({index: i, ctx: ctx, perRow: perRow, parent: position}, nodeOpt)));
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
    _.each(this.nodes, function(n){
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

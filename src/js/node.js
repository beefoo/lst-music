var Node = (function() {
  function Node(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Node.prototype.init = function(){
    this.ctx = this.opt.ctx;
    this.mode = 'resting';
    this.oscTimeStart = new Date();
    this.setPower(Math.random());
    this.resize();
  };

  Node.prototype.isActive = function(){
    return true;
  };

  Node.prototype.onUpdate = function(){
    var props = this.opt[this.mode];
    var widths = props.widthRange;
    var colors = props.colorRange;
    var oscs = props.oscRange;

    this.freq = UTIL.lerp(oscs[0], oscs[1], this.power);
    this.widthRange = [widths[0], widths[1] * this.power];
    this.colorRange = [colors[0], UTIL.lerpColor(colors[0], colors[1], this.power)];
  };

  Node.prototype.render = function(){
    var ctx = this.ctx;
    var pos = this.pos;

    var t = new Date();
    var td = (t - this.oscTimeStart) * this.freq;
    var a = 2 * Math.PI * td;
    var amount = Math.cos(a);

    var color = UTIL.lerpColor(this.colorRange[0], this.colorRange[1], amount);
    var radius = UTIL.lerp(this.widthRange[0], this.widthRange[1], amount) * pos.r;

    ctx.beginPath();
    ctx.fillStyle = 'rgb('+color.join(',')+')';
    ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  Node.prototype.resize = function(parent){
    if (parent) this.opt.parent = parent;
    var parentOpt = this.opt.parent;

    var pos = {x: 0, y: 0, d: 0, r: 0};
    var perRow = this.opt.perRow;
    var index = this.opt.index;

    // determine position
    pos.d = parentOpt.width / perRow;
    pos.r = pos.d / 2;
    pos.x = parentOpt.x + (index % perRow) * pos.d + pos.r;
    pos.y = parentOpt.y + Math.floor(index / perRow) * pos.d + pos.r;

    this.pos = pos;
  };

  Node.prototype.setMode = function(name){
    this.mode = name;
    this.onUpdate();
  };

  Node.prototype.setPower = function(value){
    this.power = value;
    this.onUpdate();
  };

  return Node;

})();

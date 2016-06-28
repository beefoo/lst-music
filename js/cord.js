var Cord = (function() {
  function Cord(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Cord.prototype.init = function(){
    this.ctx = this.opt.ctx;

    // initialize vars for cord oscillation
    this.amp = 0;
    this.maxAmp = 0;
    this.power = 0;
    this.isOscillating = false;
    this.yc = 0;

    this.onUpdate();
  };

  Cord.prototype.getLine = function(){
    return this.line;
  };

  Cord.prototype.isActive = function(){
    return this.isOscillating;
  };

  Cord.prototype.onUpdate = function(){
    this.note = NOTES[this.opt.note];
    this.len = this.note.len;
    this.pitch = this.note.pitch;
    this.freq = UTIL.lerp(this.opt.oscRange[0], this.opt.oscRange[1], this.pitch);
    this.tensity = UTIL.lerp(this.opt.tensityRange[0], this.opt.tensityRange[1], this.pitch);
    this.refreshCoordinates();
  };

  Cord.prototype.oscillate = function(){
    // not oscillating
    if (!this.isOscillating || this.amp < this.opt.ampMin) {
      this.yc = 0;
      this.amp = 0;
      this.isOscillating = false;
      return false;
    }
    var t = new Date();
    var td = (t - this.oscTimeStart) * this.freq;
    var a = 2 * Math.PI * (td);
    var ex = Math.exp(td * this.tensity); // exponential function; gets bigger over time
    this.amp = this.maxAmp / ex; // the current amplitude; gets smaller over time
    this.yc = Math.cos(a) * this.amp; // the oscillating y-coordinate
  };

  Cord.prototype.pluck = function(point){
    // console.log('Pluck! ', point);
    var xp = point.x;
    var yp = point.y;
    var angle = point.a;

    // normalize velocity
    var vp = UTIL.norm(Math.abs(point.v), 0, this.opt.maxVelocity);

    // dampen via distance from center
    var dc = 1 - Math.abs(xp - this.xMid) / this.dx;

    // distance to pull perpendicular
    this.power = vp * dc;
    this.maxAmp = UTIL.lerp(this.opt.ampRange[0], this.opt.ampRange[1], this.power);
    // it's already oscillating at a greater amplitude
    if (this.amp > this.maxAmp) this.maxAmp = this.amp;
    this.amp = this.maxAmp;

    // determine direction
    this.direction = 1;
    if (angle > 0 && angle < 180) {
      this.direction = -1;
    }

    // oscillate
    this.isOscillating = true;
    this.oscTimeStart = new Date();
  };

  Cord.prototype.refreshCoordinates = function(){
    var w = this.ctx.canvas.width;
    var h = this.ctx.canvas.height;
    var l = this.len * w;
    var cordHeight = this.opt.height * h;

    this.x0 = (w - l) * 0.5;
    this.x1 = this.x0 + l;
    this.y0 = cordHeight * this.opt.index + cordHeight * this.opt.count * 0.5;
    this.y1 = this.y0;
    this.line = [{x: this.x0, y: this.y0}, {x: this.x1, y: this.y1}];

    // store midpoint
    this.dx = this.x1-this.x0;
    this.xMid = this.x0 + this.dx*0.5;
    this.xc = this.xMid;
  };

  Cord.prototype.render = function(){
    var ctx = this.ctx;
    var curveRatio = this.opt.curveRatio;

    this.oscillate();

    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.strokeStyle = this.opt.strokeStyle;
    ctx.lineWidth = this.opt.lineWidth;

    var xc = this.xc;
    var yc = this.yc;

    var dx = xc - this.x0;
    var dy = yc - this.y0;
    // move to the center pendulum point
    var dxBez = curveRatio * Math.sqrt(dx * dx + dy * dy);
    // move to start point
    ctx.moveTo(this.x0, this.y0);
    // Draw bezier curve
    ctx.bezierCurveTo(
      xc - dxBez,
      this.y0 + yc,
      xc + dxBez,
      this.y1 + yc,
      this.x1, this.y1
    );
    // close path
    ctx.stroke();
    ctx.closePath();
  };

  Cord.prototype.resize = function(){
    this.refreshCoordinates();
  };

  Cord.prototype.update = function(options){
    _.extend(this.opt, options);
    this.onUpdate();
  };

  return Cord;

})();

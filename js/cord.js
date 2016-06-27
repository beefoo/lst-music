var Cord = (function() {
  function Cord(options) {
    var defaults = {
      len: 0.8,
      pitch: 0.5
    };
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Cord.prototype.init = function(){
    this.ctx = this.opt.ctx;
    this.len = this.opt.len;
    this.amp = 0;
    this.isOscillating = false;
    this.freq = UTIL.lerp(this.opt.oscRange[0], this.opt.oscRange[1], this.opt.pitch);
    this.ampDamp = UTIL.lerp(this.opt.ampDampRange[0], this.opt.ampDampRange[1], this.opt.pitch);

    this.refreshCoordinates();
  };

  Cord.prototype.getLine = function(){
    return this.line;
  };

  Cord.prototype.isActive = function(){
    return this.isOscillating;
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
    var td = (t - this.oscTimeStart) * 0.01;
    var a = 2 * Math.PI * (td);
    var ex = Math.exp(td * 0.2);
    this.yc = Math.cos(a) * 10 / ex;
    this.amp = 1 / ex;
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
    var amp = this.opt.maxDist * vp * dc;
    if (amp > this.amp) this.amp = amp;

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
    this.yc = 0;
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
    // console.log(this.x0, this.y0,
    //   this.xMid - dxBez0, this.yMid - dyBez0,
    //   this.xMid + dxBez1, this.yMid - dyBez1,
    //   this.x1, this.y1);
    // close path
    ctx.stroke();
    ctx.closePath();
  };

  Cord.prototype.resize = function(){
    this.refreshCoordinates();
  };

  return Cord;

})();

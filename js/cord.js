var Cord = (function() {
  function Cord(options) {
    var defaults = {
      len: 0.8
    };
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Cord.prototype.init = function(){
    this.ctx = this.opt.ctx;
    this.len = this.opt.len;

    this.refreshCoordinates();
  };

  Cord.prototype.isActive = function(){
    return false;
  };

  Cord.prototype.pluck = function(){

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

    var dx = this.x1-this.x0;
    var dy = this.y1-this.y0;
    // store midpoint
    this.xMid = this.x0 + dx*0.5;
    this.yMid = this.y0 + dy*0.5;
    // store angle
    this.ang = Math.atan2(dy, dx);
    this.sinAng = Math.sin(this.ang);
    this.cosAng = Math.cos(this.ang);
  };

  Cord.prototype.render = function(){
    var ctx = this.ctx;
    var curveRatio = this.opt.curveRatio;

    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.strokeStyle = this.opt.strokeStyle;
    ctx.lineWidth = this.opt.lineWidth;

    var xd = this.xMid;
    var yd = this.yMid;

    var dx0 = xd - this.x0;
    var dy0 = yd - this.y0;
    var dx1 = this.x1 - xd;
    var dy1 = this.y1 - yd;
    // distance
    var dist0 = Math.sqrt(dx0 * dx0 + dy0 * dy0);
    var dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
    // move to the center pendulum point
    var dxBez0 = curveRatio * dist0 * this.cosAng;
    var dyBez0 = curveRatio * dist0 * this.sinAng;
    // move to the center pendulum point
    var dxBez1 = curveRatio * dist1 * this.cosAng;
    var dyBez1 = curveRatio * dist1 * this.sinAng;
    // move to start point
    ctx.moveTo(this.x0, this.y0);
    // Draw bezier curve
    ctx.bezierCurveTo(
      this.xMid - dxBez0,
      this.yMid - dyBez0,
      this.xMid + dxBez1,
      this.yMid + dyBez1,
      this.x1, this.y1
    );
    // console.log(this.x0, this.y0, this.xMid - dxBez0,
    //   this.yMid - dyBez0,
    //   this.xMid + dxBez1,
    //   this.yMid + dyBez1,
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

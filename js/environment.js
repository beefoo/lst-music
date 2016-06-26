var Environment = (function() {
  function Environment(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options.canvas);
    this.init();
  }

  Environment.prototype.init = function(){
    this.points = [];
    this.animating = false;

    this.loadCanvas();
    this.loadListeners();
  };

  Environment.prototype.clearCanvas = function(ctx){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  Environment.prototype.getGestureData = function(e, time){
    var now = time || new Date();
    var x = e.gesture.center.x;
    var y = e.gesture.center.y;
    var a = e.gesture.angle;
    var v = e.gesture.velocity;
    return {x: x, y: y, z: 1, a: a, v: v, t: now};
  };

  Environment.prototype.lerpPoints = function(points){
    var now = new Date();
    var ms = this.opt.strokeMs;

    var validPoints = [];
    _.each(points, function(p, i){
      var lerp = 1.0 - (now - p.t) / ms;
      if (lerp > 0 && lerp <= 1) {
        p.z = lerp;
        validPoints.push(p);
      }
    });

    return validPoints;
  };

  Environment.prototype.loadCanvas = function(){
    this.$canvasWrapper = $('.canvas-wrapper').first();
    this.$canvas = $('#the-canvas');
    this.canvas = this.$canvas[0];
    this.canvasOffset = this.$canvas.offset();
    this.ctx = this.canvas.getContext('2d');

    this.resizeCanvas();
  };

  Environment.prototype.loadListeners = function(){
    var _this = this;
    var ms = this.opt.strokeMs;

    this.$canvas.hammer().on("panstart", function(e){
      _this.clearCanvas(_this.ctx);
      var d = _this.getGestureData(e);
      _this.points = [d];
      if (!_this.animating) {
        _this.render();
      }
    });

    this.$canvas.hammer().on("panmove", function(e){
      // remove points that are expired
      var now = new Date();
      _this.points = _.reject(_this.points, function(p){
        return (now - p.t) > ms;
      });
      // add current point
      var d = _this.getGestureData(e, now);
      _this.points.push(d);
    });

    this.$canvas.hammer().on("panend", function(e){
      _this.onStrokeEnd(_this.points);
    });

    $(window).on("resize", function(){ _this.resizeCanvas(); })
  };

  Environment.prototype.onStrokeEnd = function(points){
    // publish points
    $.publish('path.create', {points: points});
  };

  Environment.prototype.render = function(){
    this.points = this.lerpPoints(this.points);
    this.renderPoints();

    // only render if there's something to animate
    if (this.points.length) {
      requestAnimationFrame(this.render.bind(this));

    // pause animation
    } else {
      this.animating = false;
    }
  };

  Environment.prototype.renderPoints = function(ctx, color){
    ctx = ctx || this.ctx;
    color = color || [255, 255, 255];
    color = color.join(',');

    var points = this.points;
    if (!points.length) return false;
    var offset = this.canvasOffset;
    var width = this.opt.strokeWidth;
    var half = width / 2;
    var quarter = half / 2;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    _.each(points, function(p, i){
      var x = p.x - offset.left;
      var y = p.y - offset.top;
      var z = p.z;
      var radgrad = ctx.createRadialGradient(x, y, quarter*z, x, y, half*z);

      radgrad.addColorStop(0, 'rgba('+color+','+z+')');
      radgrad.addColorStop(0.5, 'rgba('+color+','+z/2+')');
      radgrad.addColorStop(1, 'rgba('+color+',0)');
      ctx.fillStyle = radgrad;
      ctx.fillRect(x-half*z, y-half*z, width*z, width*z);
    });
  };

  Environment.prototype.resizeCanvas = function(){
    this.canvas.width = this.$canvasWrapper.width();
    this.canvas.height = this.$canvasWrapper.height();
  };

  return Environment;

})();

$(function(){
  var env = new Environment(CONFIG);
});

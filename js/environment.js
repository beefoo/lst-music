var Environment = (function() {
  function Environment(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Environment.prototype.init = function(){
    this.animating = false;
    this.userCreature = new Creature(this.opt.creature);
    
    this.loadCanvas();
    this.loadListeners();
  };

  Environment.prototype.clearCanvas = function(ctx){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  Environment.prototype.getGestureData = function(e, time){
    var now = time || new Date();
    var offset = this.canvasOffset;
    var x = e.gesture.center.x - offset.left;
    var y = e.gesture.center.y - offset.top;
    var a = e.gesture.angle;
    var v = e.gesture.velocity;
    return {x: x, y: y, z: 1, a: a, v: v, t: now};
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
      _this.userCreature.setPoints([d]);
      if (!_this.animating) {
        _this.render();
      }
    });

    this.$canvas.hammer().on("panmove", function(e){
      // remove points that are expired
      var now = new Date();
      _this.userCreature.forgetPoints(now);
      // add current point
      var d = _this.getGestureData(e, now);
      _this.userCreature.addPoint(d);
    });

    this.$canvas.hammer().on("panend", function(e){
      _this.onStrokeEnd();
    });

    $(window).on("resize", function(){ _this.resizeCanvas(); })
  };

  Environment.prototype.onStrokeEnd = function(){
    var userPoints = this.userCreature.getPoints();
    // publish points
    $.publish('user.create', {points: userPoints});
  };

  Environment.prototype.render = function(){
    this.userCreature.lerpPoints();
    this.userCreature.render(this.ctx);

    // only render if there's something to animate
    if (this.userCreature.isActive()) {
      requestAnimationFrame(this.render.bind(this));

    // pause animation
    } else {
      this.animating = false;
    }
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

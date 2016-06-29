var Environment = (function() {
  function Environment(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Environment.prototype.init = function(){
    this.animating = false;
    this.loadCanvas();
    this.loadCreatures();
    this.loadChord();
    this.loadListeners();
    this.render();
  };

  Environment.prototype.changeChord = function(){
    this.currentProgressionIndex += 1;
    if (this.currentProgressionIndex >= this.chordCount) {
      this.currentProgressionIndex = 0;
    }
    this.currentChord = this.progression[this.currentProgressionIndex];
    this.chord.setKey(this.currentChord, this.opt.chord.transitionMs);
  };

  Environment.prototype.clearCanvas = function(ctx){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  Environment.prototype.getGestureData = function(e, time){
    var now = time || new Date();
    var offset = this.canvasOffset;
    var x = e.center.x - offset.left;
    var y = e.center.y - offset.top;
    var a = e.angle;
    var v = e.velocity;
    return {x: x, y: y, z: 1, a: a, v: v, t: now};
  };

  Environment.prototype.loadCanvas = function(){
    this.$canvasWrapper = $('.canvas-wrapper').first();
    this.$canvas = $('#the-canvas');
    this.canvas = this.$canvas[0];
    this.canvasOffset = this.$canvas.offset();
    this.ctx = this.canvas.getContext('2d');

    this.resize();
  };

  Environment.prototype.loadChord = function(){
    this.progression = _.keys(CHORDS);
    this.chordCount = this.progression.length;
    this.currentProgressionIndex = 0;
    this.currentChord = this.progression[this.currentProgressionIndex];

    var chordOpt = _.extend({ctx: this.ctx, key: this.currentChord}, this.opt.chord);
    this.chord = new Chord(chordOpt);
  };

  Environment.prototype.loadCreatures = function(){
    var creatureOpt = _.extend({}, this.opt.creature, {ctx: this.ctx})
    this.userCreature = new Creature(creatureOpt);
  };

  Environment.prototype.loadListeners = function(){
    var _this = this;
    var ms = this.opt.strokeMs;
    var h = new Hammer(this.$canvas[0]);

    // let the pan gesture support all directions.
    h.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    // pan starts
    h.on("panstart", function(e){
      _this.clearCanvas(_this.ctx);
      var d = _this.getGestureData(e);
      _this.userCreature.setPoints([d]);
      if (!_this.animating) {
        _this.render();
      }
    });

    // pan moves
    h.on("panmove", function(e){
      // remove points that are expired
      var now = new Date();
      _this.userCreature.forgetPoints(now);
      // add current point
      var d = _this.getGestureData(e, now);
      _this.userCreature.addPoint(d);
      _this.chord.listenForPluck([_this.userCreature.getPoints()]);
    });

    // pan ends
    h.on("panend", function(e){
      _this.onStrokeEnd();
    });

    // window is resized
    $(window).on("resize", function(){ _this.resize(); })
  };

  Environment.prototype.onStrokeEnd = function(){
    var _this = this;
    var userPoints = this.userCreature.getPoints();
    // publish points
    $.publish('user.create', {points: userPoints});
    _this.changeChord();
  };

  Environment.prototype.render = function(){
    // Render user creature
    this.userCreature.lerpPoints();
    this.userCreature.render();

    // render chord
    this.chord.render();

    // only render if there's something to animate
    if (this.userCreature.isActive() || this.chord.isActive()) {
      requestAnimationFrame(this.render.bind(this));

    // pause animation
    } else {
      this.animating = false;
    }
  };

  Environment.prototype.resize = function(){
    this.canvasWidth = this.$canvasWrapper.width();
    this.canvasHeight = this.$canvasWrapper.height();
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;

    this.clearCanvas(this.ctx);
    this.chord && this.chord.resize();
  };

  return Environment;

})();

$(function(){
  var env = new Environment(CONFIG);
});

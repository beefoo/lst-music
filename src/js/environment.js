var Environment = (function() {
  function Environment(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Environment.prototype.init = function(){
    this.active = false;
    this.mode = 'machine';

    this.loadCanvas();
    if (this.opt.mode=='standard' || this.opt.mode=='hybrid') {
      this.loadCreatures();
      this.loadChord();
    }
    if (this.opt.mode=='analyzer' || this.opt.mode=='hybrid') {
      this.loadAnalyzer();
    }
    this.loadListeners();
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
    ctx = ctx || this.ctx;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  Environment.prototype.getGestureData = function(e, time){
    var now = time || new Date();
    var offset = this.canvasOffset;
    var x = e.center.x - offset.left;
    var y = e.center.y - offset.top;
    var a = e.angle;
    var v = UTIL.norm(Math.abs(e.velocity), 0, this.opt.maxVelocity);
    return {x: x, y: y, z: 1, a: a, v: v, t: now};
  };

  Environment.prototype.isActive = function(){
    // var creatures = this.creatures;
    // var isCreaturesActive = false;
    // for (var i=0; i < creatures.length; i++) {
    //   if (creatures[i].isActive()) {
    //     isCreaturesActive = true;
    //     break;
    //   }
    // }
    return this.mode=='machine' || this.analyzer && this.analyzer.isActive() || this.humanCreature.isActive() || this.chord.isActive();
  };

  Environment.prototype.loadAnalyzer = function(){
    var analyzerOpt = _.extend({ctx: this.ctx}, this.opt.analyzer);
    this.analyzer = new Analyzer(analyzerOpt);
  };

  Environment.prototype.loadCanvas = function(){
    this.$canvasWrapper = $('.canvas-wrapper').first();
    this.$canvas = $('#the-canvas');
    this.canvas = this.$canvas[0];
    this.canvasOffset = this.$canvas.offset();
    this.ctx = this.canvas.getContext('2d');
    this.refreshCanvasSize();
  };

  Environment.prototype.loadChord = function(){
    this.progression = PROGRESSION.slice(0);
    this.chordCount = this.progression.length;
    this.currentProgressionIndex = 0;
    this.currentChord = this.progression[this.currentProgressionIndex];

    var chordOpt = _.extend({ctx: this.ctx, key: this.currentChord}, this.opt.chord);
    this.chord = new Chord(chordOpt);
  };

  Environment.prototype.loadCreatures = function(){
    var _this = this;
    var creatureOpt = _.extend({}, this.opt.creature, {ctx: this.ctx, type: 'human', maxVelocity: this.opt.maxVelocity});

    this.humanCreature = new Creature(creatureOpt);
    this.creatures = [];

    _(this.opt.creatureCount).times(function(i){
      creatureOpt.type = 'machine';
      creatureOpt.index = i;
      creatureOpt.strokeColor = [247, 209, 13];
      _this.creatures.push(new Creature(creatureOpt));
    });
  };

  Environment.prototype.loadListeners = function(){
    var _this = this;
    var ms = this.opt.strokeMs;
    var h = new Hammer(this.$canvas[0]);

    if (this.opt.mode=='standard' || this.opt.mode=='hybrid') {

      // let the pan gesture support all directions.
      h.get('pan').set({ direction: Hammer.DIRECTION_ALL });

      // pan starts
      h.on("panstart", function(e){
        // if (_this.mode=='teaching') return false;
        _this.mode = 'human';
        var d = _this.getGestureData(e);
        _this.humanCreature.setPoints([d]);
        // invoke render if not already animating
        if (!_this.active) _this.render();
      });

      // pan moves
      h.on("panmove", function(e){
        if (_this.mode=='teaching') return false;
        // add current point
        var d = _this.getGestureData(e);
        _this.humanCreature.addPoint(d);
        _this.chord.listenForPluck([_this.humanCreature]);
      });

      // pan ends
      h.on("panend", function(e){
        if (_this.mode=='teaching') return false;
        _this.onStrokeEnd();
      });

      // human finished teaching
      $.subscribe('creature.teach.finished', function(e, data){
        _this.mode = 'machine';
      });

      // store points in local storage
      $.subscribe('user.create.points', function(e, d){
        localStorage.setItem('user.create.points', JSON.stringify(d.points));
      });
      $.subscribe('machine.create.points', function(e, d){
        localStorage.setItem('machine.create.points', JSON.stringify(d.points));
      });
    }

    $.subscribe('training.loaded', function(e, d){
      _this.render();
    });

    // window is resized
    $(window).on("resize", function(){ _this.resize(); });
  };

  Environment.prototype.onStrokeEnd = function(){
    this.mode = 'teaching';
    var creature = this.creatures[_.random(0, this.creatures.length-1)];
    this.humanCreature.teach(creature);
    this.changeChord();
    $.publish('user.create.points', {points: this.humanCreature.getPointsNormal()});
  };

  Environment.prototype.refreshCanvasSize = function(){
    this.canvasWidth = this.$canvasWrapper.width();
    this.canvasHeight = this.$canvasWrapper.height();
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
  };

  Environment.prototype.render = function(){
    var _this = this;

    this.clearCanvas();

    if (this.opt.mode=='analyzer' || this.opt.mode=='hybrid') {
      // render analyzer
      this.analyzer.render();

      if (this.opt.mode=='analyzer') {
        requestAnimationFrame(this.render.bind(this));
        return;
      }
    }

    // Render machine creatures
    if (this.mode == 'machine') {
      _.each(this.creatures, function(c){
        if (!c.isActive()) {
          _this.changeChord();
          c.generate();
          $.publish('machine.create.points', {points: c.getPointsNormal()});
        }
        c.lerpPoints();
        c.render();
      });
      this.chord.listenForPluck(this.creatures);

    } else {
      _.each(this.creatures, function(c){
        c.clearPoints();
      });
    }

    // Render human creature
    this.humanCreature.lerpPoints();
    this.humanCreature.render();

    // render chord
    this.chord.render();

    // render analyzer
    // this.analyzer.render();

    // only render if there's something to animate
    if (this.isActive()) {
      this.active = true;
      requestAnimationFrame(this.render.bind(this));

    } else {
      this.active = false;
    }
  };

  Environment.prototype.resize = function(){
    this.refreshCanvasSize();
    this.chord && this.chord.resize();
    this.analyzer && this.analyzer.resize();
    if (!this.active) this.render();
  };

  return Environment;

})();

$(function(){
  var env = new Environment(CONFIG);
});

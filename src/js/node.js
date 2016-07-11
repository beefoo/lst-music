var Node = (function() {
  function Node(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Node.prototype.init = function(){
    this.ctx = this.opt.ctx;
    this.mode = 'resting';
    this.direction = false;
    this.transitionMs = this.opt.transitionMs;
    this.initValue();
    this.setPower(0);

    var now = new Date();
    this.phaseStart = now.getTime() + _.random(0, 2000);
    this.phaseEnd = this.phaseStart + this.phase;

    this.resize();
  };

  Node.prototype.activate = function(value){
    this.mode = 'active';
    this.startPower = this.power;
    this.targetPower = value;
    this.transitionStart = new Date();
    // this.setPower(value);
  };

  Node.prototype.addValue = function(v){
    var newValue = [];
    var count = this.count;
    var value = this.value;

    for (var i=0; i<value.length; i++) {
      var n = (value[i] * count + v[i]) / (count + 1);
      newValue.push(n);
    }

    this.value = newValue;
    this.count += 1;
  };

  Node.prototype.distance = function(v1){
    var v2 = this.value;
    var x1 = v1[0], x2 = v2[0],
        y1 = v1[1], y2 = v2[1],
        z1 = v1[2], z2 = v2[2];
    return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)+(z2-z1)*(z2-z1));
  };

  Node.prototype.initValue = function(){
    // var i = this.opt.index;
    // var value = [1, 1, 1];
    // var corner = i % 8;
    // if (corner % 2 == 0) value[0] = 0;
    // else value[1] = 0;
    // if (corner < 4) value[2] = 0;

    this.value = [Math.random(), Math.random(), Math.random()];
    this.count = 1;
  };

  Node.prototype.isActive = function(){
    return true;
  };

  Node.prototype.onUpdate = function(){
    var props = this.opt[this.mode];
    var widths = props.widthRange;
    var colors = props.colorRange;
    var phases = props.phaseRange;

    this.phase = UTIL.lerp(phases[0], phases[1], this.power);
    this.widthRange = [widths[0], widths[1] * this.power];
    this.colorRange = [colors[0], UTIL.lerpColor(colors[0], colors[1], this.power)];
  };

  Node.prototype.play = function(){
    if (this.power > 0) {
      $.publish('instrument.play', [this.opt.index, this.power]);
    }
  };

  Node.prototype.render = function(){
    this.transition();

    var ctx = this.ctx;
    var pos = this.pos;

    var now = new Date();
    var progress = UTIL.norm(now.getTime(), this.phaseStart, this.phaseEnd);
    var a = progress * Math.PI;
    var amount = Math.sin(a);

    var color = UTIL.lerpColor(this.colorRange[0], this.colorRange[1], amount);
    var radius = UTIL.lerp(this.widthRange[0], this.widthRange[1], amount) * pos.r;

    // reached end of phase; increment
    if (progress >= 1) {
      this.phaseStart = this.phaseEnd;
      this.phaseEnd += this.phase;
      // play sound
      this.play();
    }

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

  Node.prototype.rest = function(){
    this.mode = 'resting';
    this.setPower(0);
  };

  Node.prototype.setPower = function(value){
    this.power = value;
    this.onUpdate();
  };

  Node.prototype.transition = function(){
    if (!this.transitionStart) return false;

    var now = new Date();

    // transition finished
    var progressMs = now - this.transitionStart;
    if (progressMs >= this.transitionMs) {
      this.setPower(this.targetPower);
      this.transitionStart = false;
      return false;
    }

    // transitioning
    var progress = progressMs / this.transitionMs;
    var power = UTIL.lerp(this.startPower, this.targetPower, progress);
    this.setPower(power);
  };

  return Node;

})();

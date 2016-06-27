var Creature = (function() {
  function Creature(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Creature.prototype.init = function(){
    this.points = [];
  };

  Creature.prototype.addPoint = function(p){
    this.points.push(p);
  };

  Creature.prototype.forgetPoints = function(time){
    var ms = this.opt.strokeMs;

    this.points = _.reject(this.points, function(p){
      return (time - p.t) > ms;
    });
  };

  Creature.prototype.getPoints = function(){
    return this.points;
  };

  Creature.prototype.isActive = function(){
    return this.points.length;
  };

  Creature.prototype.lerpPoints = function(){
    var now = new Date();
    var ms = this.opt.strokeMs;

    var validPoints = [];
    _.each(this.points, function(p, i){
      var lerp = 1.0 - (now - p.t) / ms;
      if (lerp > 0 && lerp <= 1) {
        p.z = lerp;
        validPoints.push(p);
      }
    });

    this.points = validPoints;
  };

  Creature.prototype.render = function(ctx){
    var color = this.opt.strokeColor.join(',');
    var width = this.opt.strokeWidth;
    var half = width / 2;
    var quarter = half / 2;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    _.each(this.points, function(p, i){
      var x = p.x;
      var y = p.y;
      var z = p.z;
      var radgrad = ctx.createRadialGradient(x, y, quarter*z, x, y, half*z);

      radgrad.addColorStop(0, 'rgba('+color+','+z+')');
      radgrad.addColorStop(0.5, 'rgba('+color+','+z/2+')');
      radgrad.addColorStop(1, 'rgba('+color+',0)');
      ctx.fillStyle = radgrad;
      ctx.fillRect(x-half*z, y-half*z, width*z, width*z);
    });
  };

  Creature.prototype.setPoints = function(points){
    this.points = points;
  };

  return Creature;

})();

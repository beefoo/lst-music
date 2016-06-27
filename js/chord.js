var Chord = (function() {
  function Chord(options) {
    var defaults = {
      count: 5
    };
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Chord.prototype.init = function(){
    var _this = this;
    var cordOpt = _.extend({ctx: this.opt.ctx, count: this.opt.count}, this.opt.cord);

    this.cords = [];

    _(this.opt.count).times(function(i){
      cordOpt.index = i;
      var cord = new Cord(cordOpt);
      _this.cords.push(cord);
    });
  };

  Chord.prototype.isActive = function(){
    return _.find(this.cords, function(c){ return c.isActive(); });
  };

  Chord.prototype.listenForPluck = function(paths){
    var lines = [];

    // retrieve the last segment from each path
    _.each(paths, function(points){
      if (points.length > 1) {
        lines.push(points.slice(points.length - 2));
      }
    });

    // look for intersections
    _.each(this.cords, function(c){
      var cordLine = c.getLine();
      _.each(lines, function(l){
        var intersection = UTIL.lineIntersect(cordLine[0], cordLine[1], l[0], l[1]);
        if (intersection) {
          c.pluck(_.extend({}, l[1], intersection));
        }
      });
    });
  };

  Chord.prototype.render = function(){
    _.each(this.cords, function(c){
      c.render();
    });
  };

  Chord.prototype.resize = function(){
    _.each(this.cords, function(c){
      c.resize();
    });
  };

  return Chord;

})();

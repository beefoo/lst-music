var Chord = (function() {
  function Chord(options) {
    var defaults = {
      key: 'c'
    };
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Chord.prototype.init = function(){
    this.setKey(this.opt.key);
  };

  Chord.prototype.isActive = function(){
    return _.find(this.cords, function(c){ return c.isActive(); });
  };

  Chord.prototype.listenForPluck = function(creatures){
    var lines = [];
    var paths = _.map(creatures, function(c){ return c.getPoints(); });

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

  Chord.prototype.setKey = function(key, transitionMs){
    var _this = this;
    var cordOpt = _.extend({ctx: this.opt.ctx}, this.opt.cord);
    var chord = CHORDS[key];
    var notes = chord.notes;

    cordOpt.count = notes.length;
    this.cords = this.cords || [];

    _.each(notes, function(n, i){
      cordOpt.index = i;
      cordOpt.note = n;
      // new cord
      if (i > _this.cords.length-1) {
        var cord = new Cord(cordOpt);
        _this.cords.push(cord);

      // existing cord
      } else {
        _this.cords[i].update(cordOpt, transitionMs)
      }
    });
  };

  return Chord;

})();

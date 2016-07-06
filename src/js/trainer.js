var Trainer = (function() {
  function Trainer(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);

    if (this.opt.trainer) this.init();
  }

  Trainer.prototype.init = function(){
    this.points = [];
    this.loadListeners();
  };

  Trainer.prototype.addPoints = function(points){
    var nPoints = _.map(points, function(p){
      return [p.x, p.y, p.a, p.v];
    });

    this.points.push(nPoints);
  };

  Trainer.prototype.loadListeners = function(){
    var _this = this;

    $.subscribe('user.create.points', function(e, data){
      _this.addPoints(data.points);
    });
  };

  return Trainer;

})();

$(function(){
  var train = new Trainer(CONFIG);
});

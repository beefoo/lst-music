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

  Trainer.prototype.loadListeners = function(){
    var _this = this;

    $.subscribe('user.create.points', function(e, data){
      var nPoints = _.map(data.points, function(p){
        return [p.x, p.y, p.a, p.v];
      });

      _this.points.push(nPoints);

      if (_this.points.length >= 20) {
        var obj = _this.points;
        var data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
        window.open(data, "", "_blank");
      }
    });
  };

  return Trainer;

})();

$(function(){
  var train = new Trainer(CONFIG);
});

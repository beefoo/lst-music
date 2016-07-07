var Trainer = (function() {
  function Trainer(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);

    if (this.opt.trainer) this.init();
  }

  Trainer.prototype.init = function(){
    this.points = [];
    this.loadData();
    this.loadListeners();
  };

  Trainer.prototype.addPoints = function(points){
    var nPoints = _.map(points, function(p){
      return [p.x, p.y, p.a, p.v];
    });

    // this.points.push(nPoints);
    var data = {
      columns: ['x', 'y', 'a', 'v'],
      rows: nPoints
    };
    var session_id = this.getSession();
    $.post(this.opt.apiUrl + '/paths/create', {
      data: JSON.stringify(data),
      session: session_id
    }, function(d){
      // console.log('Saved', d);
    });
  };

  Trainer.prototype.getSession = function(){
    var session_id = localStorage.getItem('session_id');
    if (session_id) return session_id;

    session_id = Math.random().toString(36).substr(2, 8);
    localStorage.setItem('session_id', session_id);
    return session_id;
  };

  Trainer.prototype.loadData = function(){
    var _this = this;

    $.getJSON(this.opt.trainingUrl, function(data) {
      var paths = _.map(data.paths, function(path){
        var p = path.data;
        var columns = p.columns;
        return _.map(p.rows, function(row){
          return _.object(columns, row);
        });
      });
      $.publish('training.loaded', {data: paths});
    });
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

var Player = (function() {
  function Player(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Player.prototype.init = function(){
    this.loadPlayer();
  };

  Player.prototype.loadNotes = function(){
    var _this = this;
    this.notes = _.clone(NOTES);

    _.each(this.notes, function(n, k){
      _this.notes[k].sound = soundManager.createSound({
        id: k,
        url: n.file,
        autoLoad: true,
        autoPlay: false,
        multiShot: true
      });
    });

  };

  Player.prototype.loadPlayer = function(){
    var _this = this;
    soundManager.setup({
      preferFlash: false,
      html5Only: true,
      useHTML5Audio: true,
      onready: function() {
        _this.loadNotes();
        _this.loadListeners();
      }
    });
  };

  Player.prototype.loadListeners = function(){
    var _this = this;

    $.subscribe('note.play', function(e, key, volume){
      _this.play(key, volume);
    });
  };

  Player.prototype.play = function(key, volume){
    var n = this.notes[key];
    if (n) {
      n.sound.setVolume(volume*100);
      n.sound.play();
    }
  };

  return Player;

})();

$(function(){
  var player = new Player(CONFIG.player);
});

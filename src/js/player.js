var Player = (function() {
  function Player(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Player.prototype.init = function(){
    this.sounds = {};
    this.loadPlayer();
  };

  Player.prototype.addSound = function(k, file){
    this.sounds[k] = soundManager.createSound({
      id: k,
      url: file,
      autoLoad: true,
      autoPlay: false,
      multiShot: true
    });
  };

  Player.prototype.loadInstruments = function(){
    var _this = this;

    _.each(this.opt.instruments, function(file, i){
      _this.addSound('instrument'+i, file);
    });
  };

  Player.prototype.loadNotes = function(){
    var _this = this;

    _.each(NOTES, function(n, k){
      _this.addSound(k, n.file);
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
        _this.loadInstruments();
        _this.loadListeners();
      }
    });
  };

  Player.prototype.loadListeners = function(){
    var _this = this;

    $.subscribe('note.play', function(e, key, volume){
      _this.play(key, volume);
    });

    $.subscribe('instrument.play', function(e, index, volume){
      _this.play('instrument'+index, volume * _this.opt.instrumentVolume);
    });
  };

  Player.prototype.play = function(key, volume){
    var s = this.sounds[key];
    if (s) {
      s.setVolume(volume*100);
      s.play();
    }
  };

  return Player;

})();

$(function(){
  var player = new Player(CONFIG.player);
});

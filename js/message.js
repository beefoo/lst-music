var Message = (function() {
  function Message(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);

    this.init();
  }

  Message.prototype.init = function(){
    this.$messageWrapper = $('.message-wrapper').first();

    this.loadListeners();
  };

  Message.prototype.hide = function(){
    this.$messageWrapper.removeClass('active');
  };

  Message.prototype.loadListeners = function(){
    var _this = this;

    $.subscribe('message.show.id', function(e, id){
      _this.showById(id);
    });

    $.subscribe('message.hide', function(e, data){
      _this.hide();
    });
  };

  Message.prototype.showById = function(id){
    this.$messageWrapper.find('.message').removeClass('active');
    $(id).addClass('active');
    this.$messageWrapper.addClass('active');
  };

  return Message;

})();

$(function(){
  var debug = new Message(CONFIG);
});

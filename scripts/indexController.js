(function(module) {
  var indexController = {};
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  indexController.index = function() {
    $('section#aboutMe').show().siblings().hide();
  };
  module.indexController = indexController;
})(window);

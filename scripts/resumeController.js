(function(module) {
  var resumeController = {};
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  resumeController.index = function() {
    $('section.box').not('#aboutMe').slideDown();
    $('section#resume').siblings().hide();
  };
  module.resumeController = resumeController;
})(window);

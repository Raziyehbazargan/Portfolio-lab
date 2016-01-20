(function(module) {
  var contactController = {};
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  contactController.index = function() {
    $('section.box').not('#aboutMe').show();
    $('section#contact').siblings().hide();
  };
  module.contactController = contactController;
})(window);

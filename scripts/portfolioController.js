(function(module){
  var portfolioController = {};
  portfolioController.index = function() {
    $('section.box').not('#aboutMe').slideDown();
    $('section#portfolio').siblings().hide();
  };
  module.portfolioController = portfolioController;
})(window);

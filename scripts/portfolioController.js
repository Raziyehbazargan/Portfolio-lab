(function(module){
  var portfolioController = {};
  portfolioController.index = function() {
    $('section.box').not('#aboutMe').show();
    $('section#portfolio').siblings().hide();
  };
  module.portfolioController = portfolioController;
})(window);

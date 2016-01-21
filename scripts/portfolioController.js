(function(module){
  var portfolioController = {};
  portfolioController.index = function() {
    $('section.box').not('#aboutMe').slideDown();
    $('section#portfolio').siblings().hide();
    repos.requestRepos(repoAjaxView.index);
  };
  module.portfolioController = portfolioController;
})(window);

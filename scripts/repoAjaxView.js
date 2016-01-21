(function(module){
  var repoAjaxView = {};
  var ui = function() {
    var $portfolio = $('#portfolio');
    $portfolio.find('ul').empty();
    // $portfolio.show().siblings().hide();
  };
  var render = function(repo) {
    return $('<li>').html('<a href="' + repo.html_url + '">' + repo.name + '</a>');
  };
  repoAjaxView.index = function() {
    ui();
    $('#portfolio ul').append(repos.with('name').map(render));
  };
  module.repoAjaxView = repoAjaxView;
})(window);

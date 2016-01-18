
var articleView = {};

articleView.initIndexPage = function() {
  Experience.all.forEach(function(a){
    $('#portfolio').append(a.toHtml());
  });
};

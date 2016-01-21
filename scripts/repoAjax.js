(function(module){

  var repos = {};
  repos.all = [];
  repos.requestRepos = function(callback){
    var qs = 'per+page=5&sort=updated';
    $.ajax({
      url:'https://api.github.com/users/raziyehbazargan/repos',
      type:'GET',
      //the space after 'token ' is nessesary and important
      headers:{'Authorization': 'token ' + GITHUB_TOKEN },
      success:function(data,message,xhr){
        repos.all = data;
      }
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo){
      return repo [attr];  //*** ask
    });
  };
  module.repos = repos;
})(window); //**ask

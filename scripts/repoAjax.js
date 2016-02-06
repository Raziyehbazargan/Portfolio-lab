(function(module){

  var repos = {};
  repos.all = [];
  console.log('the array is' + repos.all);
  repos.requestRepos = function(callback){
    var qs = '?per+page=5&sort=updated';
    $.ajax({
      url:'https://api.github.com/users/raziyehbazargan/repos' + qs,
      type:'GET',
      headers: {'Authorization': 'token '+ GITHUB_TOKEN},
      success:function(data,message,xhr){
        repos.all = data;
      }
    }).done(callback);
  };
  //the space after 'token ' is nessesary and important

  repos.with = function(attr) {
    return repos.all.filter(function(repo){
      return repo[attr];  //*** ask
    });
  };
  module.repos = repos;
})(window); //**ask

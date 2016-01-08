
var experiences = [];

function Experience (opts) {
  this.project = opts.project;
  this.inistitue = opts.inistitue;
  this.date = opts.date;
  this.description = opts.description;
}

Experience.prototype.toHtml = function() {
  var $newExperience = $('li article.template').clone();


  var htmlScript = $('#projectDate').html();
  console.log(htmlScript);

  var handlebarsScript = Handlebars.compile(htmlScript);
  console.log(handlebarsScript);

  var content = {
    'project': this.project,
    'inistitue': this.inistitue,
    'date': this.date,
    'description': this.description,
  };
  console.log(content);


  var compileHtml = handlebarsScript(content);
  console.log(compileHtml);
  // $newExperience.find('h5:first-child').html('<b>' + this.project + '</b>');
  // $newExperience.find('h5:nth-child(2)').text(this.inistitue + ' - ' + this.date);
  // $newExperience.find('p:nth-child(3)').text(this.description);

  // $('#articles').append($newExperience);
  // $newExperience.append('<hr/>');
  // $newExperience.removeClass('template');
  // return $newExperience;
  return compileHtml;
};

rawData.forEach(function(ele) {
  experiences.push(new Experience(ele));
});

experiences.forEach(function(a){
  $('li.portfolio').append(a.toHtml());
});
// $('article.template').hide();

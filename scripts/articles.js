
var experiences = [];

function Experience (opts) {
  this.project = opts.project;
  this.inistitue = opts.inistitue;
  this.date = opts.date;
  this.description = opts.description;
}

Experience.prototype.toHtml = function() {
  var $newExperience = $('li article.template').clone();

  $newExperience.find('h5:first-child').text(this.project);
  $newExperience.find('h5:nth-child(2)').text(this.inistitue);
  $newExperience.find('p:nth-child(3)').text(this.date);
  $newExperience.find('p:nth-child(4)').text(this.description);

  $('#articles').append($newExperience);
  $newExperience.append('<hr/>');
  $newExperience.removeClass('template');
  return $newExperience;
};

rawData.forEach(function(ele) {
  experiences.push(new Experience(ele));
});

experiences.forEach(function(a){
  $('#articles').append(a.toHtml());
});

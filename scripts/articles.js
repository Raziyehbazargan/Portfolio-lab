
var experiences = [];

function Experience (opts) {
  this.company = opts.company;
  this.positionName = opts.positionName;
  this.city = opts.city;
  this.date = opts.date;
  this.description = opts.description;
}

Experience.prototype.toHtml = function() {
  var $newExperience = $('article.template').clone();

  $newExperience.find('h5:first-child').text(this.company);
  $newExperience.find('h5:nth-child(2)').text(this.positionName);
  $newExperience.find('p:nth-child(3)').text(this.city +', '+ this.date);
  $newExperience.find('p:nth-child(4)').text(this.description);

  $('#articles').append($newExperience);
  $newExperience.removeClass('template');
  return $newExperience;
};

rawData.forEach(function(ele) {
  experiences.push(new Experience(ele));
});

experiences.forEach(function(a){
  $('#articles').append(a.toHtml());
});

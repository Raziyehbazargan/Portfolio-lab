
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

  $newExperience.find('.company').html('<h5><b>'+this.company+'</b></h5>');
  $newExperience.find('.positionName').html('<h5><span>'+this.positionName+'</span></h5>');
  $newExperience.find('.city').html('<h5>' + this.city + ' ' + this.date +'</h5>');
  $newExperience.find('.description').html(this.description);

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

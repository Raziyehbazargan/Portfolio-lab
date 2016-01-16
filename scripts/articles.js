
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
  // console.log(content);
  var compileHtml = handlebarsScript(content);
  // console.log(compileHtml);
  return compileHtml;
};

Experience.tabPage = function() {
  $('.main-nav').on('click' , '.tab' , function(){
    $('.main-nav li').removeClass('active');
    $(this).addClass('active');
    $('.box').hide();
    $('#' + $(this).data('content')).show();
  });
  $('.main-nav .tab:first').click();
};

rawData.forEach(function(ele) {
  experiences.push(new Experience(ele));
});

experiences.forEach(function(a){
  $('li#portfolio').append(a.toHtml());
});

$(document).ready(function(){
  Experience.tabPage();
});

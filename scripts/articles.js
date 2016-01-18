
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
  // console.log(htmlScript);

  var handlebarsScript = Handlebars.compile(htmlScript);
  // console.log(handlebarsScript);

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
    $('#' + $(this).data('content')).slideDown('slow');
  });
  $('.main-nav .tab:first').click();
};

rawData.forEach(function(ele) {
  experiences.push(new Experience(ele));
});

experiences.forEach(function(a){
  $('li#portfolio').append(a.toHtml());
});


// function loadJsonContactData(){
//   var htmlEmailLink = '<a href=';
//   var htmlGithubLink = '<a href=';
//   var htmllinkeDinLink = '<a href=';
//   var htmlFacebookLink = '<a href=';
//   $.getJSON('scripts/contact.json',function(response) {
//     var $list = $('#contact');
//     $.each(response,function(index , contactInf) {
//       htmlEmailLink += '"' + contactInf.email + '"' + '>email</a><br>';
//       htmlGithubLink += '"' + contactInf.github + '"' + '>github</a><br>';
//       htmllinkeDinLink += '"' + contactInf.linkedin + '"' + '>linkedin</a><br>';
//       htmlFacebookLink += '"' + contactInf.facebook + '"' + '>facebook</a><br>';
//     });
//
//     $list.html(htmlEmailLink);
//     // $list.html(htmlGithubLink);
//     // $list.html(htmllinkeDinLink);
//     // $list.html(htmlFacebookLink);
//   });
// };

$(function(){
  Experience.tabPage();
  // loadJsonContactData();
});

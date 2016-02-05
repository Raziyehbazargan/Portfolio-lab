
(function(module){

  function Experience (opts) {
    this.project = opts.project;
    this.institute = opts.institute;
    this.date = opts.date;
    this.description = opts.description;
  }

  Experience.all=[];

  Experience.prototype.toHtml = function() {
    var htmlScript = $('#projectDate').html();
    var handlebarsScript = Handlebars.compile(htmlScript);
    var content = {
      'project': this.project,
      'institute': this.institute,
      'date': this.date,
      'description': this.description,
    };
    var compileHtml = handlebarsScript(content);
    return compileHtml;
  };

  Experience.loadAll = function(rawData) {
    rawData.forEach(function(ele) {
      Experience.all.push(new Experience(ele));
    });
  };

  Experience.getAll = function(){
    $.getJSON('data/data.json',function(rawData){
      Experience.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
      articleView.initIndexPage();
    });
  };

  // This function will retrieve the data from either a local or remote source,
  // and process it, then hand off control to the View.
  Experience.fetchAll = function() {
    if (localStorage.rawData) {
      $.ajax({   //loking for JSON object
        type: 'HEAD',  //because we just head of data and dont use get because get get all content of data
        url:'/data/data.json',
        success:function(data,message,xhr){
          console.log(xhr);
          var eTag = xhr.getResponseHeader('eTag');
          console.log(eTag);
          if(!localStorage.eTag || localStorage.eTag !== eTag ){// !localStorage.eTag  -->if eTag doesn;t exist
            localStorage.eTag = eTag;
            Experience.getAll();
          }else {
            console.log('here 3');
            Experience.loadAll(JSON.parse(localStorage.rawData));
            articleView.initIndexPage();
          }
        }
      });
    }else {
      Experience.getAll();
    }
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
  module.Experience = Experience;
})(window);

$(function(){
  $('ul#tab-text li').not('.aboutMe').hide();

  $('ul#tabs li').click(function(e){
    if (!$(this).hasClass('active')) {
      var tabNum = $(this).index();
      $('ul#tabs li.active').removeClass('active');
      $(this).addClass('active');

      switch (tabNum) {
      case 0:{
        $('ul#tab-text li.aboutMe').show();
        $('ul#tab-text li').not('.aboutMe').hide();
        break;
      }
      case 1:{
        $('ul#tab-text li.portfolio').show();
        $('ul#tab-text li').not('.portfolio').hide();
        break;
      }
      case 2:{
        $('ul#tab-text li.resume').show();
        $('ul#tab-text li').not('.resume').hide();
        break;
      }
      case 3:{
        $('ul#tab-text li.contact').show();
        $('ul#tab-text li').not('.contact').hide();
        break;
      }
      default:$('ul#tabs li.aboutMe').show();
      }
    }
  });
});

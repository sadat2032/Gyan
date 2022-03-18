$(function () {

    $(window).on('scroll', function () {
 
       if ($(window).scrollTop() > $('#header').height()) {
          $('#header').addClass('menu_animate')
       } else {
          $('#header').removeClass('menu_animate')
       }
    })
 
   
 })
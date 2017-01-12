$(document).ready(function() {

// OWL CAROUSEL

$("#carousel").owlCarousel({

    // autoPlay: 0, //Set AutoPlay to XX seconds

    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet : [768,1],
    // itemsTabletSmall : [768,1],
    itemsMobile : [479,1],

//Basic Speeds
    paginationSpeed : 400

});


// http://css-tricks.com/examples/SmoothPageScroll

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// sponsor image hover

//set opacity to 0.4 for all the images  
//opacity = 1 - completely opaque  
//opacity = 0 - invisible  
  
$('.logo-sponsor img').css('opacity', 0.2);
  
// when hover over the selected image change the opacity to 1  
$('.logo-sponsor').hover(
   function(){
      $(this).find('img').stop().fadeTo('slow', 1);
   },
   function(){
      $(this).find('img').stop().fadeTo('slow', 0.2);
   });




// backstretch

$(".backstretch-header").backstretch("img/header-img-bg.jpg");

$(".backstretch-sign-up").backstretch("img/sign-up-bg.jpg");


//animate css 

// $('.text').hover(

//       function(){
//         $(this).addClass('animated fadeInUp');
//       },
//       function(){
//         $(this).addClass('animated fadeOutDown');
//       }

//     );





}); //doc ready




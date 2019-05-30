//NAVIGATION SCROLL
$( window ).scroll(function() {
  if($(window).scrollTop() >= 40){
			$( '.header').css( "background-color", "#0E0E0E");
		} else {
			$( '.header').css( "background-color", "transparent");
		}
});


// MENU DROPDOWN
$(function() {
  $('.menu__dropdown--links').hover(function() {
    $('.menu__dropdown a').addClass('menu__hover');

  }, function() {
    // on mouseout, reset the background colour
    $('.menu__dropdown a').removeClass('menu__hover');
  });
});

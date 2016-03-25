$(document).ready(function() {

	$(window).scroll(function() {
		$('.topmenu').toggleClass('topmenu-scrolled', $(this).scrollTop() > 0);
	});
	
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 'slow');
		return false;
	});

	$('#responsivebutton').click(function() {
		$('#responsivemenu').addClass('responsivemenu-clicked');
	});
	$('#responsivemenubutton').click(function() {
		$('#responsivemenu').removeClass('responsivemenu-clicked');
	});
	
	$('#slideshow').cycle({ 
	    fx:     'fade', 
	    speed:  500,
		slideResize: true,
		containerResize: false,
		width: '100%',
		fit: 1,
	    next:   '#slidenext', 
	    prev:   '#slideprev'
	});

});
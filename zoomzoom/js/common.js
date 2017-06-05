
jQuery(document).ready(function($) {
	var toggle_button = $("<a>", {
		id: "toggle-btn", 
		html : "Menu",
		title: "Menu",
		href : "#" } 
		);
	var nav_wrap = $('nav#nav-wrap')
	var nav = $("ul#nav");
	nav_wrap.find('a.menu-btn').remove(); 
	nav_wrap.prepend(toggle_button);
	toggle_button.on("click", function(e) {
		e.preventDefault();
		nav.slideToggle("fast");
	});
	if (toggle_button.is(':visible')) nav.addClass('mobile');
	$(window).resize(function(){
		if (toggle_button.is(':visible')) nav.addClass('mobile');
		else nav.removeClass('mobile');
	});
	$('ul#nav li a').on("click", function(){
		if (nav.hasClass('mobile')) nav.fadeOut('fast');
	});

	$("#intro").backstretch("images/header-background.jpg");
	/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

$('.smoothscroll').on('click',function (e) {
	e.preventDefault();
	var target = this.hash,
	$target = $(target);
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 800, 'swing', function () {
		window.location.hash = target;
	});
});

/*----------------------------------------------------*/
/*	Make sure that #intro height is
/* equal to the browser height.
------------------------------------------------------ */

$('#intro, #map').css({ 'height': $(window).height() });
$(window).on('resize', function() {
	$('#intro, #map').css({ 'height': $(window).height() });
	$('body').css({ 'width': $(window).width() })
	$("#intro").backstretch("images/header-background.jpg");
});
});
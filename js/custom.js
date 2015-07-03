jQuery('document').ready(function(){


 
	// add slide line of level

	$('.line').each(function(){

		var fullW = $(this).attr('data-full');
		var dtAnim = $(this).attr('data-animation');
		
		$(this).append('<div class="full animated '+dtAnim+'"></div>');

		var cr = fullW-100;

		$(this).children('.full').css({left:cr+'%'});
		$(this).children('.full').append('<span class="skillL animated zoomIn">'+fullW+'%</span>');

	});
	


}); // END jQuery
//checkbox groups
//***************
$('.more-choices').hide();
$('.counter').hide();

$('.js-expand-trigger').bind('click', function(e){
  $(e.target).toggleClass('icon-down-dir');
  $(e.target).toggleClass('icon-up-dir');
  jQuery(this).parent().find('.more-choices').slideToggle('fast');
  jQuery(this).parent().find('.counter').fadeToggle('fast');
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});

//sliders
//***************
$('.slider-input').hide();

$('#price-slider').noUiSlider({
	start: [ 0, 1400 ],
	step: 5,
	range: {
		'min': [ 0 ],
		'max': [ 1400 ]
	}
});
$('#price-slider').Link('lower').to($('#price-min'));
$('#price-slider').Link('lower').to($('#price-min-label .value'), function ( value ) {
	$(this).html( value.split(".")[0] );
});
$('#price-slider').Link('upper').to($('#price-max'));
$('#price-slider').Link('upper').to($('#price-max-label .value'), function ( value ) {
	$(this).html( value.split(".")[0] );
});


// $("#slider-tooltip").Link('upper').to('-inline-<div class="tooltip"></div>', function ( value ) {

// 	// The tooltip HTML is 'this', so additional
// 	// markup can be inserted here.
// 	$(this).html(
// 		'<strong>Value: </strong>' +
// 		'<span>' + value + '</span>'
// 	);
// });
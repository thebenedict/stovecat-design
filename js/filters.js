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

$('#fuel-test-result-year-slider').noUiSlider({
	start: [ 1980, 2015 ],
	step: 1,
	range: {
		'min': [ 1980 ],
		'max': [ 2015 ]
	}
});
$('#fuel-test-result-year-slider').Link('lower').to($('#fuel-test-result-min'));
$('#fuel-test-result-year-slider').Link('lower').to($('#fuel-test-result-min-label .value'), function ( value ) {
	$(this).html( value.split(".")[0] );
});
$('#fuel-test-result-year-slider').Link('upper').to($('#fuel-test-result-max'));
$('#fuel-test-result-year-slider').Link('upper').to($('#fuel-test-result-max-label .value'), function ( value ) {
	$(this).html( value.split(".")[0] );
});

//

function smallTicks( value, type ){
	return 1;
}

$('.iwa-slider').noUiSlider({
	start: [ 0, 4 ],
	step: 1,
	range: {
		'min': [ 0 ],
		'max': [ 4 ]
	}
});
$('#iwa-emissions-slider').Link('lower').to($('#iwa-emissions-min'));
$('#iwa-emissions-slider').Link('upper').to($('#iwa-emissions-max'));

$('#iwa-efficiency-slider').Link('lower').to($('#iwa-efficiency-min'));
$('#iwa-efficiency-slider').Link('upper').to($('#iwa-efficiency-max'));

$('#iwa-indoor-emissions-slider').Link('lower').to($('#iwa-indoor-emissions-min'));
$('#iwa-indoor-emissions-slider').Link('upper').to($('#iwa-indoor-emissions-max'));

$('#iwa-safety-slider').Link('lower').to($('#iwa-safety-min'));
$('#iwa-safety-slider').Link('upper').to($('#iwa-safety-max'));

$('#iwa-safety-slider').noUiSlider_pips({
	mode: 'steps',
	filter: smallTicks,
});

//pane-toggle
//*************

$(".pane-toggle").click(function() {
  $("main[role='content']").toggle();
  $("aside[role='content-assist']").toggle(); 
})
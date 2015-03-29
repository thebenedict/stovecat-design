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
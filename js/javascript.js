$(document).ready(function() {
  $('.experiment-image-1').click(function() {
    $('.experiment-image-2').fadeToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });
});

$(document).ready(function() {
  $('.work-page-grid-item').click(function() {
    $('.work-page-grid-item').not(this).removeClass('active');
    $(this).toggleClass('active');
  });
});
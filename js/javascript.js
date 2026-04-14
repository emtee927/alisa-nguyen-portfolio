// $(document).ready(function() {
//   $('.experiment-image-1').click(function() {
//     $('.experiment-image-2').fadeToggle("slow");
//     // Alternative animation for example
//     // slideToggle("fast");
//   });
// });

document.querySelectorAll('.work-page-grid-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.work-page-grid-item')
      .forEach(i => {
        if (i !== item) i.classList.remove('active');
      });

    item.classList.toggle('active');
  });
});
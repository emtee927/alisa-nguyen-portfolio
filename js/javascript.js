// $(document).ready(function() {
//   $('.experiment-image-1').click(function() {
//     $('.experiment-image-2').fadeToggle("slow");
//     // Alternative animation for example
//     // slideToggle("fast");
//   });
// });

document.querySelectorAll('.work-page-grid-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
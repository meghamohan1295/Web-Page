(function($) {
  document.querySelector('.menu-toggle').addEventListener('click', function() {
    $('.menu-toggle').addClass('active');
    $('nav').addClass('active');
  });
})();

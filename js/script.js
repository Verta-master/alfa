//Mobile menu
$('.menu-btn').click(function() {
  $('#nav_bottom').toggleClass('menu--opened');
  $('#nav_bottom ul').slideToggle();
});

$('.nav-btn').click(function() {
  $('#nav_top').toggleClass('nav_top--opened');
});

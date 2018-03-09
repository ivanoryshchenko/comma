$('.hero').waypoint(function(direction) {
  if (direction == "down") {
    $('.sticky-menu').addClass('gym');
  } else if (direction == "up") {
    $('.sticky-menu').removeClass('gym');
  }
});

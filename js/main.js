$('.hero').waypoint(function(direction) {
  if (direction == "down") {
    $('.cta').show();
  } else if (direction == "up") {
    $('.cta').hide();
  }
});

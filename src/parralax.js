window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f) {
      setTimeout(f, 800 / 60)
  }

  var first = document.getElementById('absolute_first');
  var rand1 = 20;
  var rand2 = 100;

  function parallaxbubbles() {

      var scrolltop = window.pageYOffset
      first.style.top = -scrolltop * rand2 / 100 + 'px'
  }

  window.addEventListener('scroll', function() {
      requestAnimationFrame(parallaxbubbles)
  }, false);

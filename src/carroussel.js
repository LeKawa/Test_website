var btn_left = document.querySelector('.header-container__carroussel__right');
var btn_right = document.querySelector('.right');
var imgs = document.querySelectorAll('.carousel img');
var wrap = document.querySelector('.carousel-wrap');

var counter = 0;

btn_left.addEventListener('click', function() {
    if (counter > 0) {
      console.log('coucou');
        counter--;
    } else {
      console.log('coucou');
        counter = imgs.length - 1;
    }

    wrap.style.marginLeft = (-wrap_width * counter) + 'px';
});

btn_right.addEventListener('click', function() {
    if (counter < imgs.length - 1) {
        counter++;
    } else {
        counter = 0;
    }

    wrap.style.marginLeft = (-wrap_width * counter) + 'px';
});

var btn = document.querySelector('.header-container__orange');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal__overlay');

btn.addEventListener('click', function() {
  modal.style.display = 'block';
});

overlay.addEventListener('click', function() {
  modal.style.display = '';
});

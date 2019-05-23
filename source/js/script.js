/*jshint esversion: 6 */

(function () {

  "use strict";

  var slideIndex = 1;
  var slides = document.querySelectorAll('.reccomendations__item'); // Item block of slider list
  var dotsWrap = document.querySelector('.dots-list'); // Slider dots list
  var dots = document.querySelectorAll('.dot'); // Dot button
  function showSlides(n) {
      if(n > slides.length) {
          slideIndex = 1;
      }
      if(n < 1) {
          slideIndex = slides.length;
      }
      // slides.forEach((item) => item.style.display = 'none');

      for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      // dots.forEach((item) => item.classList.remove('dot-active'));

      for(var j = 0; j < dots.length; j++) {
          dots[j].classList.remove('dot--active');
      }
      slides[slideIndex-1].style.display = 'block';
      slides[slideIndex].style.display = 'block';
      dots[slideIndex-1].classList.add('dot--active');
  }
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }
  currentSlide(slideIndex);

  // Event listener for dots
  dotsWrap.addEventListener('click', function(evt) {
      for(var i = 0; i < dots.length + 1; i++) {
          if(evt.target.classList.contains('dot') && evt.target == dots[i-1]) {
              currentSlide(i);
          }
      }
  });

})();

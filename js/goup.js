'use strict';

(function () {
  var goTopBtn = document.querySelector('#scrollToTop');

  function trackScroll () {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords - 500) {
      goTopBtn.classList.add('scrollToTop-show');
    }
    if (scrolled < coords - 500) {
      goTopBtn.classList.remove('scrollToTop-show');
    }
  }

  function backToTop () {
    window.scrollTo(0, 0);
  }

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

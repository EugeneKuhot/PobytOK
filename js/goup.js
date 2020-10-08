'use strict';

(function () {

  let goTopBtn = document.querySelector('#scrollToTop');

  let lastScrollTop = 0;
  window.onscroll = onScroll;
  function onScroll (e) {
    let top = window.pageYOffset;
    if (lastScrollTop > top) {
      goTopBtn.classList.add('scrollToTop-show');
    } else {
      goTopBtn.classList.remove('scrollToTop-show');
    }
    lastScrollTop = top;
  }


  function trackScroll () {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

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


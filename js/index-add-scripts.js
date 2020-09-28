'use strict';

(function () {
  let aboutUsAddBtn = document.querySelector('.about-us__add-btn');
  let aboutUsAddText = document.querySelector('.about-us__add-desc');

  aboutUsAddBtn.addEventListener('click', function () {
    aboutUsAddText.style = "display: inline-block;";
    aboutUsAddBtn.style = "display: none;";
  });



  let faqMobileHidden = document.querySelectorAll('.js-mobile-hidden');
  let faqMobileShowBtn = document.querySelector('.faq__see-all');

  faqMobileShowBtn.addEventListener('click', function () {
    faqMobileHidden.forEach(el => el.style = "display: block");
    faqMobileShowBtn.style = "display: none";
  })


})();

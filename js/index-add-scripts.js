'use strict';

(function () {
  let aboutUsAddBtn = document.querySelector('.about-us__add-btn');
  let aboutUsAddText = document.querySelector('.about-us__add-desc');

  aboutUsAddBtn.addEventListener('click', function () {
    aboutUsAddText.style = "display: inline-block;";
    aboutUsAddBtn.style = "display: none;";
  });
})();

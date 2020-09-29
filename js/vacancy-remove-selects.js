'use strict';

(function () {

  let selectHeaders = document.querySelectorAll('.select__header');
  let selectHeaderInputs = document.querySelectorAll('.select__header input');
  let selectHeaderSpans = document.querySelectorAll('.select__header span');
  let selectWraps = document.querySelectorAll('.select-wrap');

  document.addEventListener('click', function (e) {
    for (let i = 0; i < selectHeaders.length; i++) {
      if (e.target !== selectHeaders[i] && e.target !== selectHeaderInputs[i] && e.target !== selectHeaderSpans[i]) {
        selectWraps[i].classList.remove('is-active');
        selectHeaderSpans[i].classList.remove('arrow-up');
      }
    }
  })
})();

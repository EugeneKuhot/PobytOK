'use strict';

(function () {
  let docAccordionBtn = document.querySelectorAll('button.legalization-accordion');

  docAccordionBtn.forEach(el => el.addEventListener('click', function () {
    el.parentElement.classList.toggle('open-accordion');
  }));
})();


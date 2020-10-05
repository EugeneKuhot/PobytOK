'use strict';

(function () {
  let greetingsBlock = document.querySelector('.property-greetings');

  function greetingBlockAnimation () {
    greetingsBlock.classList.add('greetings__container--onload');
  }

  window.addEventListener('load', greetingBlockAnimation);
})();

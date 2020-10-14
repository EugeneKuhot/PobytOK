'use strict';

(function () {
  let greetingsBlock = document.querySelector('.notice-greetings');

  function greetingBlockAnimation () {
    greetingsBlock.classList.add('greetings__container--onload');
  }

  window.addEventListener('load', greetingBlockAnimation);
})();

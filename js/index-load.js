'use strict';

(function () {
  let greetingsBlock = document.querySelector('.greetings__container');

  function greetingBlockAnimation () {
    greetingsBlock.classList.add('greetings__container--onload');
  }

  window.addEventListener('load', greetingBlockAnimation);

})();

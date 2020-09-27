'use strict';

(function () {

  let userBtn = document.querySelector('.header-nav__link.user-name');

  userBtn.addEventListener('click', function () {
    userBtn.classList.toggle('active-user');
  })

})();

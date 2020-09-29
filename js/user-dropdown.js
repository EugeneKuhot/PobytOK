'use strict';

(function () {

  let userBtn = document.querySelector('.header-nav__link.user-name');

  userBtn.addEventListener('click', function () {
    userBtn.classList.toggle('active-user');
  })

  let userBtnspan = userBtn.querySelector('span');
  let userBtnSvg = userBtn.querySelector('svg');
  let userBtnUsername = document.querySelector('.header-nav__user-desktop-user-name');
  let userBtnAvatar = document.querySelector('.header-nav__avatar-wrap img');

  document.addEventListener('click', function (e) {
    if (userBtn.classList.contains('active-user')) {
      if (e.target !== userBtn && e.target !== userBtnspan
        && e.target !== userBtnSvg
        && e.target !== userBtnUsername
        && e.target !== userBtnAvatar) {
        userBtn.classList.remove('active-user');
        userBtn.classList.remove("active");
        let panel = document.querySelector('.header-nav__user-dropdown');
        panel.style.maxHeight = null;
      }
    }

  })










})();

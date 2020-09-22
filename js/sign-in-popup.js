'use strict';

(function () {

  const regBtnHeader = document.querySelector('.header-nav__link.registration-btn');
  const loginBtnHeader = document.querySelector('.header-nav__link.login-btn');
  const signOverlay = document.querySelector('.sign-overlay');

  const loginBtn = document.querySelector('.sign-wrap__login-btn');
  const regBtn = document.querySelector('.sign-wrap__reg-btn');
  const loginWrap = document.querySelector('.log-in-form');
  const regWrap = document.querySelector('.registration-form');

  function getSignWrap (wrap, signBtn) {
    loginWrap.classList.add('visually-hidden');
    regWrap.classList.add('visually-hidden');
    wrap.classList.remove('visually-hidden');

    loginBtn.classList.remove('sign-wrap__active-btn');
    regBtn.classList.remove('sign-wrap__active-btn');
    signBtn.classList.add('sign-wrap__active-btn');
  }


  function getSignPopup (signWrap, signBtn) {
    signOverlay.classList.remove('visually-hidden');
    getSignWrap(signWrap, signBtn)
  };

  regBtnHeader.addEventListener('click', function () {
    getSignPopup(regWrap, regBtn)
  });
  loginBtnHeader.addEventListener('click', function () {
    getSignPopup(loginWrap, loginBtn)
  });
  loginBtn.addEventListener('click', function () {
    getSignWrap(loginWrap, loginBtn)
  });
  regBtn.addEventListener('click', function () {
    getSignWrap(regWrap, regBtn)
  });

})();

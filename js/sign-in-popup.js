'use strict';

(function () {

  const regBtnHeader = document.querySelector('.header-nav__link.registration-btn');
  const loginBtnHeader = document.querySelector('.header-nav__link.login-btn');
  const signOverlay = document.querySelector('.sign-overlay');
  const signCloseBtn = document.querySelector('.sign-wrap__btn');

  function closePopup () {
    signOverlay.classList.remove('sign-overlay--open');
    signOverlay.classList.add('visually-hidden');
  }

  signCloseBtn.addEventListener('click', closePopup);


  const loginBtn = document.querySelector('.sign-wrap__login-btn');
  const regBtn = document.querySelector('.sign-wrap__reg-btn');
  const loginWrap = document.querySelector('.log-in-form');
  const regWrap = document.querySelector('.registration-form');

  function getSignWrap (wrap, signBtn) {
    signOverlay.classList.add('sign-overlay--open');

    loginWrap.classList.add('visually-hidden');
    regWrap.classList.add('visually-hidden');
    wrap.classList.remove('visually-hidden');

    loginBtn.classList.remove('sign-wrap__active-btn');
    regBtn.classList.remove('sign-wrap__active-btn');
    signBtn.classList.add('sign-wrap__active-btn');
  }

  function getSignPopup (signWrap, signBtn) {
    signOverlay.classList.remove('visually-hidden');
    getSignWrap(signWrap, signBtn);

    document.addEventListener('keydown', function (e) {
      if (e.keyCode === 27) {
        closePopup();
      }
    });

    document.addEventListener('click', function (e) {
      if (e.target === signOverlay) {
        closePopup();
      }
    })
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

'use strict';

(function () {
  const mandatoryOverlay = document.querySelector('.mandatory-registration-popup');
  const mandatoryCloseBtn = document.querySelector('.mandatory-registration-popup .sign-wrap__btn');
  const regBtnHeader = document.querySelector('.header-nav__link.registration-btn');
  const loginBtnHeader = document.querySelector('.header-nav__link.login-btn');
  const loginWrap = document.querySelector('.log-in-form');
  const regWrap = document.querySelector('.registration-form');
  const loginBtn = document.querySelector('.sign-wrap__login-btn');
  const regBtn = document.querySelector('.sign-wrap__reg-btn');
  const signOverlay = document.querySelector('.sign-overlay');
  const mandatoryLogin = mandatoryOverlay.querySelector('.login-btn');
  const mandatoryReg = mandatoryOverlay.querySelector('.registration-btn');

  function closePopup () {
    mandatoryOverlay.classList.add('visually-hidden');
  }

  mandatoryCloseBtn.addEventListener('click', closePopup);

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      closePopup();
    }
  });

  function getSignWrap (wrap, signBtn) {
    loginWrap.classList.add('hidden');
    regWrap.classList.add('hidden');
    wrap.classList.remove('hidden');
    signOverlay.classList.add('sign-overlay--open');

    loginBtn.classList.remove('sign-wrap__active-btn');
    regBtn.classList.remove('sign-wrap__active-btn');
    signBtn.classList.add('sign-wrap__active-btn');
  }
  function getSignPopup (signWrap, signBtn) {
    signOverlay.classList.remove('visually-hidden');
    signOverlay.classList.add('sign-overlay--open');
    getSignWrap(signWrap, signBtn);

    document.addEventListener('keydown', function (e) {
      if (e.keyCode === 27) {
        closePopup();
      }
    });
  };

  mandatoryLogin.addEventListener('click', function () {
    closePopup();
    loginBtnHeader.classList.add('sign-in-active-btn');
    regBtnHeader.classList.remove('sign-in-active-btn-registration');
    getSignPopup(loginWrap, loginBtn);
  });
  mandatoryReg.addEventListener('click', function () {
    closePopup();
    loginBtnHeader.classList.remove('sign-in-active-btn');
    regBtnHeader.classList.add('sign-in-active-btn-registration');
    getSignPopup(regWrap, regBtn);
  });

  let documentsName = document.querySelectorAll('li.legalization-documents__link');

  documentsName.forEach(el => el.addEventListener('click', function () {
    mandatoryOverlay.classList.remove('visually-hidden');
  }))
})();

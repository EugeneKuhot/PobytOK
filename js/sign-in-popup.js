'use strict';

(function () {

  const regBtnHeader = document.querySelector('.header-nav__link.registration-btn');
  const loginBtnHeader = document.querySelector('.header-nav__link.login-btn');
  const signOverlay = document.querySelector('.sign-overlay');
  const signCloseBtn = document.querySelector('.sign-wrap__btn');

  function closePopup () {
    signOverlay.classList.remove('sign-overlay--open');
    signOverlay.classList.add('visually-hidden');
    regBtnHeader.classList.remove('sign-in-active-btn-registration');
    loginBtnHeader.classList.remove('sign-in-active-btn');
  }

  signCloseBtn.addEventListener('click', closePopup);

  const loginBtn = document.querySelector('.sign-wrap__login-btn');
  const regBtn = document.querySelector('.sign-wrap__reg-btn');
  const loginWrap = document.querySelector('.log-in-form');
  const regWrap = document.querySelector('.registration-form');

  let secondFormEmployer = document.querySelector('.form-employer');
  let secondFormAgency = document.querySelector('.form-agency');
  let secondFormForeigner = document.querySelector('.form-foreigner');
  let secondFormUserFirm = document.querySelector('.form-user-firm');
  let secondFormUser = document.querySelector('.form-user');



  function getSignWrap (wrap, signBtn) {
    signOverlay.classList.add('sign-overlay--open');
    secondFormEmployer.classList.add('hidden');
    secondFormAgency.classList.add('hidden');
    secondFormForeigner.classList.add('hidden');
    secondFormUserFirm.classList.add('hidden');
    secondFormUser.classList.add('hidden');
    loginWrap.classList.add('hidden');
    regWrap.classList.add('hidden');
    wrap.classList.remove('hidden');

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
  };

  regBtnHeader.addEventListener('click', function () {
    getSignPopup(regWrap, regBtn);
    regBtnHeader.classList.add('sign-in-active-btn-registration');
    loginBtnHeader.classList.remove('sign-in-active-btn');
  });
  loginBtnHeader.addEventListener('click', function () {
    getSignPopup(loginWrap, loginBtn);
    regBtnHeader.classList.remove('sign-in-active-btn-registration');
    loginBtnHeader.classList.add('sign-in-active-btn');
  });
  loginBtn.addEventListener('click', function () {
    getSignWrap(loginWrap, loginBtn);
    regBtnHeader.classList.remove('sign-in-active-btn-registration');
    loginBtnHeader.classList.add('sign-in-active-btn');
  });
  regBtn.addEventListener('click', function () {
    getSignWrap(regWrap, regBtn);
    regBtnHeader.classList.add('sign-in-active-btn-registration');
    loginBtnHeader.classList.remove('sign-in-active-btn');
  });


})();

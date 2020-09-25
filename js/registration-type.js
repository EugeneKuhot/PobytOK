'use strict';

(function () {

  let registrationWrap = document.querySelector('.registration-form');
  let registrationInput = registrationWrap.querySelector('.registration-form__select');
  let registrationSelectHeader = registrationWrap.querySelector('.registration-select__header');
  let userTypeList = document.querySelector('.registration-form__select-list');

  let employerItem = userTypeList.querySelector('.employer-item');
  let employerWrap = userTypeList.querySelector('.registration-form__employ-wrap');
  let employerDescWrap = document.querySelector('.registration-form__employ');

  let foreignItem = userTypeList.querySelector('.foreign-item');
  let foreignDescWrap = document.querySelector('.registration-form__foreign');

  let userItem = userTypeList.querySelector('.user-item');
  let userDescWrap = document.querySelector('.registration-form__user');
  let userWrap = userTypeList.querySelector('.registration-form__user-wrap');

  let allUserTypes = userTypeList.querySelectorAll('.registration-select-item');

  allUserTypes.forEach(el => el.addEventListener('click', function () {
    registrationInput.value = el.textContent;

    if (registrationInput.value === "Прямой работодатель" || registrationInput.value === "Агентство по трудоустройству") {
      employerItem.classList.add('active-user');
      foreignItem.classList.remove('active-user');
      userItem.classList.remove('active-user');
    }else if (registrationInput.value === 'Юридическое лицо' || registrationInput.value === 'Физическое лицо') {
      employerItem.classList.remove('active-user');
      foreignItem.classList.remove('active-user');
      userItem.classList.add('active-user');
    }else if (registrationInput.value === 'Иностранец') {
      employerItem.classList.remove('active-user');
      foreignItem.classList.add('active-user');
      userItem.classList.remove('active-user');
    }
  }));

  function getRegistrationTypeDesc(wrap) {
    employerDescWrap.classList.add('hidden');
    foreignDescWrap.classList.add('hidden');
    userDescWrap.classList.add('hidden');

    wrap.classList.remove('hidden');
  }

  function hideUserTypeWrap(wrap) {
    wrap.classList.add('hidden');
  }

  function getUsersList() {
    userTypeList.parentElement.classList.toggle('is-active');
    let icon = this.querySelector('.registration-select__icon');
    icon.classList.toggle('arrow-up')
  }

  registrationSelectHeader.addEventListener('click', getUsersList)

  foreignItem.addEventListener('click', function () {
    getRegistrationTypeDesc(foreignDescWrap);
    hideUserTypeWrap(employerWrap);
    hideUserTypeWrap(userWrap);

    registrationInput.value = foreignItem.textContent;
  });

  employerItem.addEventListener('click', function () {
    employerWrap.classList.toggle('hidden');

    hideUserTypeWrap(userWrap);
    getRegistrationTypeDesc(employerDescWrap);
  });

  userItem.addEventListener('click', function () {
    userWrap.classList.toggle('hidden');

    hideUserTypeWrap(employerWrap);
    getRegistrationTypeDesc(userDescWrap);
  });


  let secondFormEmployer = document.querySelector('.form-employer');
  let secondFormAgency = document.querySelector('.form-agency');
  let secondFormForeigner = document.querySelector('.form-foreigner');
  let secondFormUserFirm = document.querySelector('.form-user-firm');
  let secondFormUser = document.querySelector('.form-user');
  let firstFormSubmitBtn = document.querySelector('.js--first-form-submit');



  function getSecondForm() {
    if (registrationInput.value === "Прямой работодатель") {
      secondFormEmployer.classList.remove('hidden');
      hideUserTypeWrap(registrationWrap);
    }else if (registrationInput.value === "Агентство по трудоустройству") {
      secondFormAgency.classList.remove('hidden');
      hideUserTypeWrap(registrationWrap);
    }else if (registrationInput.value === 'Иностранец') {
      secondFormForeigner.classList.remove('hidden');
      hideUserTypeWrap(registrationWrap);
    }else if (registrationInput.value === 'Юридическое лицо') {
      secondFormUserFirm.classList.remove('hidden');
      hideUserTypeWrap(registrationWrap);
    }else if (registrationInput.value === 'Физическое лицо') {
      secondFormUser.classList.remove('hidden');
      hideUserTypeWrap(registrationWrap);
    }
  }

  firstFormSubmitBtn.addEventListener('click', getSecondForm)


})();

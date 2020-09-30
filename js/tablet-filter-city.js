'use strict';

(function () {

  let tabletRegionInput = document.querySelector('.regions-tablet-input');

  let tabletCityInputWrap = document.querySelector('.cities-tablet-input-wrap');
  let tabletCityInput = document.querySelector('.filter__city-input');

  let dolnoslanskCities = document.querySelector('.js-dolnoslansk');
  let kujPomCities = document.querySelector('.js-kuj-pom');
  let lubelskCities = document.querySelector('.js-lubelsk');
  let lubuskCities = document.querySelector('.js-lubusk');
  let lodzCities = document.querySelector('.js-lodz');
  let malopolskCities = document.querySelector('.js-malopolsk');
  let mazowieckCities = document.querySelector('.js-mazowieck');
  let opolskCities = document.querySelector('.js-opolsk');
  let podkarpacCities = document.querySelector('.js-podkarpac');
  let podlaskCities = document.querySelector('.js-podlask');
  let pomorCities = document.querySelector('.js-pomor');
  let slaskCities = document.querySelector('.js-slask');
  let swietokrzCities = document.querySelector('.js-swietokrz');
  let warminoMazurCities = document.querySelector('.js-warmino-mazur');
  let wielkopolCities = document.querySelector('.js-wielkopol');
  let zachodpomorCities = document.querySelector('.js-zachodpomor');

  let regionsItems = document.querySelectorAll('.filter__wojewodstwo-tablet');

  regionsItems.forEach(el => el.addEventListener('click', function () {
    tabletCityInput.value = '';
  }));

  let cityWraps = [dolnoslanskCities, kujPomCities, lubelskCities, lubuskCities, lodzCities, malopolskCities,
    mazowieckCities, opolskCities, podkarpacCities, podlaskCities, pomorCities, slaskCities, swietokrzCities,
    warminoMazurCities, wielkopolCities, zachodpomorCities];

  function getSelectBody(cityWrap, wraps) {
    wraps.forEach( function(el) {
      el.classList.add('hidden');
      el.classList.remove('select-body');
    });
    cityWrap.classList.remove('hidden');
    cityWrap.classList.add('select__body');
  }

  tabletCityInputWrap.addEventListener('click', function () {
    if (tabletRegionInput.value === 'Dolnośląskie') {
      getSelectBody(dolnoslanskCities, cityWraps);
    } else if (tabletRegionInput.value === 'Kujawsko-pomorskie') {
      getSelectBody(kujPomCities, cityWraps);
    } else if (tabletRegionInput.value === 'Lubelskie') {
      getSelectBody(lubelskCities, cityWraps);
    } else if (tabletRegionInput.value === 'Lubuskie') {
      getSelectBody(lubuskCities, cityWraps);
    } else if (tabletRegionInput.value === 'Łódzkie') {
      getSelectBody(lodzCities, cityWraps);
    } else if (tabletRegionInput.value === 'Małopolskie') {
      getSelectBody(malopolskCities, cityWraps);
    } else if (tabletRegionInput.value === 'Mazowieckie') {
      getSelectBody(mazowieckCities, cityWraps);
    } else if (tabletRegionInput.value === 'Opolskie') {
      getSelectBody(opolskCities, cityWraps);
    } else if (tabletRegionInput.value === 'Podkarpackie') {
      getSelectBody(podkarpacCities, cityWraps);
    } else if (tabletRegionInput.value === 'Podlaskie') {
      getSelectBody(podlaskCities, cityWraps);
    } else if (tabletRegionInput.value === 'Pomorskie') {
      getSelectBody(pomorCities, cityWraps);
    } else if (tabletRegionInput.value === 'Śląskie') {
      getSelectBody(slaskCities, cityWraps);
    } else if (tabletRegionInput.value === 'Swiętokrzyskie') {
      getSelectBody(swietokrzCities, cityWraps);
    } else if (tabletRegionInput.value === 'Warmińsko-mazurskie') {
      getSelectBody(warminoMazurCities, cityWraps);
    } else if (tabletRegionInput.value === 'Wielkopolskie') {
      getSelectBody(wielkopolCities, cityWraps);
    } else if (tabletRegionInput.value === 'Zachodniopomorskie') {
      getSelectBody(zachodpomorCities, cityWraps);
    }
  });

})();

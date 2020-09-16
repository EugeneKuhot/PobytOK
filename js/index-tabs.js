'use strict';

(function () {
  let tabsBlock = document.querySelector('.new-ads__topic-list');
  let tabItems = tabsBlock.querySelectorAll('.new-ads__topic-item');
  let workAdsWrap = document.querySelector('.new-ads__work-list');
  let propertyAdsWrap = document.querySelector('.new-ads__property-list');
  let adsWrap = document.querySelector('.new-ads__ads-list');

  let adWraps = [workAdsWrap, propertyAdsWrap, adsWrap];

  function getActiveTabItem (item) {
    tabItems.forEach(el => el.classList.remove('new-ads__topic-item--active'));
    item.classList.add('new-ads__topic-item--active');
  }

  function getActiveAdsList () {
    for (let i = 0; i < adWraps.length; i++) {
      if (tabItems[i].classList.contains('new-ads__topic-item--active')) {
        adWraps.forEach(el => el.classList.remove('new-ads__active-list'));
        adWraps.forEach(el => el.classList.add('visually-hidden'));
        adWraps[i].classList.add('new-ads__active-list');
        adWraps[i].classList.remove('visually-hidden');
      }
    }
  }

  tabItems.forEach(el => el.addEventListener('click', function () {
    getActiveTabItem(el);
    getActiveAdsList();
  }))

})();

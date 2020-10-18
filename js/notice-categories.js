'use strict';

(function () {
  const categoriesItems = document.querySelectorAll('.categories-btn');
  const categoriesUnderlists = document.querySelectorAll('.categories-underlist-wrap');

  function closeUnderlists() {
    categoriesUnderlists.forEach(function (el) {
      el.classList.add('hidden');
      let parent = el.parentNode;
      parent.classList.remove('active-category');
    });
  }

  function toggleUnderList(button) {

    let parentEl = button.parentNode;
    let underList = parentEl.querySelector('.categories-underlist-wrap');

    if (parentEl.classList.contains('active-category')) {
      underList.classList.add('hidden');
      parentEl.classList.remove('active-category');
    } else {
      closeUnderlists();
      underList.classList.remove('hidden');
      parentEl.classList.add('active-category');
    }

  }

  categoriesItems.forEach(el => el.addEventListener('click', function () {
    toggleUnderList(el);
  }));




})();

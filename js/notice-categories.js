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
    closeUnderlists();
    let parentEl = button.parentNode;
    let underList = parentEl.querySelector('.categories-underlist-wrap');
    underList.classList.toggle('hidden');
    parentEl.classList.toggle('active-category');
  }

  categoriesItems.forEach(el => el.addEventListener('click', function () {
    toggleUnderList(el);
  }));





  categoriesItems.forEach(item => {item.addEventListener('click', categoryToogle)});



    function selectToogle () {
      this.parentElement.classList.toggle('is-active');
      let icon = this.querySelector('.select__icon');
      icon.classList.toggle('arrow-up')
    }


})();

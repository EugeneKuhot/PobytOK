'use strict';

(function () {
  let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select-item');

    selectHeader.forEach(item => {item.addEventListener('click', selectToogle)});

    selectItem.forEach(item => {item.addEventListener('click', selectChoose)});

    function selectToogle () {
      this.parentElement.classList.toggle('is-active');
      let icon = this.querySelector('.select__icon');
      icon.classList.toggle('arrow-up')
    }

    function selectChoose() {
      let text = this.textContent;
      let currentText = this.closest('.select-wrap').querySelector('.select');
      currentText.value = text;

      let icon = this.closest('.select-wrap').querySelector('.select__icon');
      icon.classList.remove('arrow-up')

      this.closest('.select-wrap').classList.remove('is-active');
    }
  }

  select();
})();

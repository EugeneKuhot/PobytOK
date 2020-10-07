
"use strict";


var keypressSlider_desc = document.querySelector(".slider-keypress-desc");
var input0_desc = document.querySelector(".input-with-keypress-0-desc");
var input1_desc = document.querySelector(".input-with-keypress-1-desc");
var inputs_desc = [input0_desc, input1_desc];

noUiSlider.create(keypressSlider_desc, {
  start: [0, 600],
  connect: true,
  tooltips: [false, true],
  step: 1,
  range: {
    min: [0],
    max: [1000]
  },
  format: {
    from: function (value) {
      return parseInt(value);
    },
    to: function (value) {
      return parseInt(value);
    }
  }
});


keypressSlider_desc.noUiSlider.on("update", function (values, handle) {
  inputs_desc[handle].value = values[handle];

});






var keypressSlider = document.querySelector(".slider-keypress");
var input0 = document.querySelector(".input-with-keypress-0");
var input1 = document.querySelector(".input-with-keypress-1");
var inputs = [input0, input1];

noUiSlider.create(keypressSlider, {
  start: [0, 600],
  connect: true,
  tooltips: [false, true],
  step: 1,
  range: {
    min: [0],
    max: [1000]
  },
  format: {
    from: function (value) {
      return parseInt(value);
    },
    to: function (value) {
      return parseInt(value);
    }
  }
});

/* begin Inputs  */

/* end Inputs  */
keypressSlider.noUiSlider.on("update", function (values, handle) {
  inputs[handle].value = values[handle];


});




let seeMore = document.getElementById('seeMore');
let load1 = document.getElementsByClassName('offers-block__item')[1]
let load2 = document.getElementsByClassName('offers-block__item')[2]
let load3 = document.getElementsByClassName('offers-block__item')[3]
let load4 = document.getElementsByClassName('offers-block__item')[4]
let load5 = document.getElementsByClassName('offers-block__item')[5]
let load6 = document.getElementsByClassName('offers-block__item')[6]




load1.style.display = 'none'
load2.style.display = 'none'
load3.style.display = 'none'
load4.style.display = 'none'
load5.style.display = 'none'
load6.style.display = 'none'
 let sloader = document.getElementById('loader')

seeMore.addEventListener('click', getNone);

function getNone() {
  if (load1.style.display == 'none') {
    loader.style.display = "block"
    setTimeout(clearLoader, 800);
    function clearLoader() {
      loader.style.display = "none";
      load1.style.display = 'block'
      load2.style.display = 'block'
    }
  } else if (load3.style.display == 'none') {
    loader.style.display = "block"
    setTimeout(clearLoader1, 800);
    function clearLoader1() {
      loader.style.display = "none";
      load1.style.display = 'block'
      load2.style.display = 'block'
      load3.style.display = 'block'
      load4.style.display = 'block'
    }

  } else if (load5.style.display == 'none') {
    loader.style.display = "block"
    setTimeout(clearLoader2, 800);
    function clearLoader2() {
      loader.style.display = "none";
      load1.style.display = 'block'
      load2.style.display = 'block'
      load3.style.display = 'block'
      load4.style.display = 'block'
      load5.style.display = 'block'
      load6.style.display = 'block'
    }
  } else{
    endProduct.innerHTML = 'Больше товаров нет'
  }

}



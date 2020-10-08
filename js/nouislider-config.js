
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
var tooltip = document.querySelector(".noUi-tooltip");

keypressSlider.noUiSlider.on("update", function (values, handle) {
  inputs[handle].value = values[handle];
});




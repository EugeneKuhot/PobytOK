'use strict';

(function() {

  var parent = document.querySelectorAll(".range-slider");
  if(!parent) return;

  var
    rangeS1 = parent[0].querySelectorAll("input[type=range]"),
    numberS1 = parent[0].querySelectorAll("input[type=number]");

  rangeS1.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS1[0].value),
        slide2 = parseFloat(rangeS1[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS1[0].value = slide1;
      numberS1[1].value = slide2;
    }
  });

  numberS1.forEach(function(el) {
    el.oninput = function() {
      var number1 = parseFloat(numberS1[0].value),
        number2 = parseFloat(numberS1[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS1[0].value = number2;
        numberS1[1].value = tmp;
      }

      rangeS1[0].value = number1;
      rangeS1[1].value = number2;

    }
  });














  var
    rangeS2 = parent[1].querySelectorAll("input[type=range]"),
    numberS2 = parent[1].querySelectorAll("input[type=number]");

  rangeS2.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS2[0].value),
        slide2 = parseFloat(rangeS2[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS2[0].value = slide1;
      numberS2[1].value = slide2;
    }
  });

  numberS2.forEach(function(el) {
    el.oninput = function() {
      var number1 = parseFloat(numberS2[0].value),
        number2 = parseFloat(numberS2[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS2[0].value = number2;
        numberS2[1].value = tmp;
      }

      rangeS2[0].value = number1;
      rangeS2[1].value = number2;

    }
  });
})();

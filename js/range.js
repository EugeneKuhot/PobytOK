'use strict';

(function() {

  var parent = document.querySelector(".range-slider");
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
        	slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });




const allRanges = document.querySelectorAll(".range-slider");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range-wrap__max-range");
  const bubble = wrap.querySelector(".range-value-output");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const val = range.value;
  const bubbleXPercentile = Number(((val - min) * 100) / (max - min));

  bubble.style.left = `calc(${bubbleXPercentile}% + (${20 - bubbleXPercentile * 0.15}px))`;
}





})();

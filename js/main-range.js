document.addEventListener("DOMContentLoaded", () => {

  // ======== Slider with one handle

  const priceSlider = document.getElementById('r-slider');

  noUiSlider.create(priceSlider, {
    start: [0, 10000],
    tooltips: true,
    connect: true,
    padding: 6,
    range: {
      'min': 0,
      'max': 10000
    },
    step: 1,
    format: {
      // 'to' the formatted value. Receives a number.
      to: function (value) {
        return value;
      },
      // 'from' the formatted value.
      // Receives a string, should return a number.
      from: function (value) {
        return value;
      }
    }
  });


  // ======== Slider set

  const params = new URLSearchParams(window.location.search);
  const priceRange = params.get("pricerange");
  let priceFrom = document.querySelector('#price-from');

  if (priceRange) {
    priceSlider.noUiSlider.set(priceRange.split(','));
    priceFrom.value = priceSlider.noUiSlider.get();
  }


});

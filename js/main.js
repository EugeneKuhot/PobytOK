$(document).ready(function() {
  var allText = $('.vacancy__resume--text'),
    textLeft = $('.vacancy__resume--text--left'),
    textRight = $('.vacancy__resume--text--right');
  $('.vacancy__resume--body input[type=checkbox]').on('change', function() {
    if ($(this).is(':checked')) {
      allText.removeClass('active');
      textRight.addClass('active');
    } else {
      allText.removeClass('active');
      textLeft.addClass('active');
    }
  })

  var mobileFilter = $('.filter__mobile');

  $('.vacancy__mobile-filter').on('click', function(e) {
    e.preventDefault();
    mobileFilter.addClass('opened');
  })

  $('.filter__back').on('click', function(e) {
    e.preventDefault();
    mobileFilter.removeClass('opened');
  })

  $('.vacancy__view button').on('click', function(e) {
    e.preventDefault();
    $('.vacancy__view button').removeClass('active');
    $(this).addClass('active');
  })


  var newsList = $('.offers-block__list');

  $('.firstView').on('click', function() {
    newsList.removeClass('offers-block__list--grid');
  })

  $('.secondView').on('click', function() {
    newsList.addClass('offers-block__list--grid');
  })


  $('.head__info p').each(function () {
      $(this).prop('Counter', 0).animate({
              Counter: $(this).data('value')
          }, {
          duration: 1500,
          easing: 'swing',
          step: function (now) {
              $(this).text(this.Counter.toFixed());
          }
      });
  });

})

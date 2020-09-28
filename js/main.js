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

    $(document).mouseup(function (e){
      var div = $(".select__body");
      if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.parent().removeClass('is-active');
      }
    });

  $('.greetings__container').addClass('greetings__container--onload');

})

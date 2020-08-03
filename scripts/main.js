$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 750) {
      $('#header-logo').attr('src', 'assets/logo-2018.svg');
      $('#filter-header').removeClass('d-none');
    } else {
      $('#header-logo').attr('src', 'assets/logo_white.png');
      $('#filter-header').addClass('d-none');
    }
  });

  $('#nav-menu').hover(function () {
    $('.header').addClass('solid');
    $('.header').removeClass('transparent');
    $('.menu-wrapper').addClass('solid');
    $('.menu-wrapper').removeClass('transparent');
    $('#header-logo').attr('src', 'assets/logo-2018.svg');
  });

  $('#nav-menu').mouseleave(function () {
    $('.header').addClass('transparent');
    $('.header').removeClass('solid');
    $('.menu-wrapper').removeClass('solid');
    $('.menu-wrapper').addClass('transparent');
    $('#header-logo').attr('src', 'assets/logo_white.png');
  });

  $('.slider').slick();

  if ( $('.slider-synced').length ) {

    $('.slider-synced').each(function() {
      var sliderFor = $(this).data("for");
      var sliderNav = $(this).data("nav");
        
      $(sliderFor).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: sliderNav
      });
      $(sliderNav).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: sliderFor,
        dots: false,
        centerMode: false,
        focusOnSelect: true
      });

    });


  }
  


});

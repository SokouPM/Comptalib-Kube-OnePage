$(document).ready(function () {
  $('.productionSlide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });

  $('.customerSlide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });
});
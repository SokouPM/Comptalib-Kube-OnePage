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
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1114,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  });
});
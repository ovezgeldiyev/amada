$(function () {
  $(".services__inner-slider").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    fade: false,
    arrows: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 930,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
        },
      },
    ],
  });
});

$(function () {
  $(".q-d-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-d-gallery-list-left",
    nextArrow: ".q-d-gallery-list-right",
  });
});

$(function () {
  $(".q-d-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-d-reviews-list-left",
    nextArrow: ".q-d-reviews-list-right",
  });
});

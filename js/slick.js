$(function () {
  $(".q-f-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-f-gallery-list-left",
    nextArrow: ".q-f-gallery-list-right",
  });
});

$(function () {
  $(".q-f-reviews-list").slick({
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
    prevArrow: ".q-f-reviews-list-left",
    nextArrow: ".q-f-reviews-list-right",
  });
});

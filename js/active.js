// BX Slider

$(document).ready(function () {
  $(".slider").bxSlider({
    auto: "true",
    pause: "3000",
    speed: "700",
    autostart: "true",
  });
  $(function () {
    $("#menu").slicknav();
  });
  $(function () {
    $.scrollUp();
  });
});

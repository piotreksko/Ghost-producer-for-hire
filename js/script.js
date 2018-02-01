$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 250) {
      $(".navbar").addClass("compressed");
    } else {
      $(".navbar").removeClass("compressed");
    }
  });
});

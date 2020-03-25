$(document).ready(function() {
  if (localStorage.getItem("language") != null) {
    var lang = localStorage.getItem("language");

    if (lang == "de") {
      $("#de").addClass("focus");
      $("#en").removeClass("focus");
      $("#start").attr("href", "de/steps.html");
    }
    if (lang == "en") {
      $("#en").addClass("focus");
      $("#de").removeClass("focus");
      $("#start").attr("href", "en/steps.html");
    }
  }

  // Process translation
  $(function() {
    $(".translate").click(function() {
      var lang = localStorage.getItem("language");
      if (lang == "de") {
        $("#de").addClass("focus");
        $("#en").removeClass("focus");
        $("#start").attr("href", "de/steps.html");
      }
      if (lang == "en") {
        $("#en").addClass("focus");
        $("#de").removeClass("focus");
        $("#start").attr("href", "en/steps.html");
      }
    });
  });
});

function setLanguage(lang) {
  localStorage.setItem("language", lang);
}

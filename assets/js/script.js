$(document).ready(function() {
  for (var step = 0; step < 400; step++) {
    $("#step-" + step + " input").prop("checked", false);
  }
  var lang = localStorage.getItem("language");
  var count = 0;
  var scroll = 0;
  $("button[btn-next]").click(function() {
    const currentStep = $("#steps-container").attr("step");
    const currentList = $("#steps-container").attr("list");
    $("#steps-container").attr("step", parseInt(currentStep) + 1);
    $("#step-" + (parseInt(currentStep) + 1)).removeClass("d-none");

    if ($("#step-" + currentStep).next("ul").length == 0) {
      if ($("#step-" + currentStep).next().length == 0) {
        $("#step-" + (parseInt(currentStep) - 3) + " input").prop(
          "checked",
          true
        );
        $("#step-" + currentStep + " input").prop("checked", true);
      } else {
        $("#step-" + currentStep + " input").prop("checked", true);
      }
    }

    count += 1;
    if (count == 39 && currentStep != 399) {
      $("button[btn-next]").css("background-color", "green");
      if (lang == "de") {
        $("button[btn-next]").text("Nächstes Arbeitspaket");
      } else {
        $("button[btn-next]").text("Next Working-Package");
      }
    }
    if (count == 40 && currentStep != 400) {
      $("#list-" + currentList).addClass("d-none");
      $("#steps-container").attr("list", parseInt(currentList) + 1);
      $("button[btn-next]").css("background-color", "#007bff");
      if (lang == "de") {
        $("button[btn-next]").text("Nächster Arbeitsschritt");
      } else {
        $("button[btn-next]").text("Next Working-Step");
      }
      $("#barStep-" + currentList).removeClass("active");
      $("#barStep-" + (parseInt(currentList) + 1)).addClass("active");
      count = 0;
      scroll = 0;
    }

    $("#scrollView").scrollTop(scroll);
    scroll += 30;

    if (currentStep == 399) {
      $("button[btn-next]").addClass("d-none");
      $("a[btn-submit]").removeClass("d-none");
    }

    $("#image").attr(
      "src",
      "../assets/img/" + (parseInt(currentStep) + 1) + ".png"
    );
  });

  $("button[btn-play]").click(function() {
    var videoFile =
      "../assets/vid/" + $("#steps-container").attr("list") + ".mp4";
    $("#video").attr("src", videoFile);
    $("#videoDiv video")[0].load();
    $("#play-vid-modal").modal("show");
  });
});

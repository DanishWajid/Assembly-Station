$(document).ready(function() {
  for (var step = 0; step < 40; step++) {
    $("#step-" + step).prop("checked", false);
  }
  var lang = localStorage.getItem("language");
  var count = 0;
  var scroll = 0;
  $("button[btn-next]").click(function() {
    const currentStep = $("#steps-container").attr("step");
    $("#steps-container").attr("step", parseInt(currentStep) + 1);
    $("#scrollView").scrollTop(scroll);
    $("#step-" + currentStep).prop("checked", true);
    $("#step-" + currentStep).attr("disabled", true);

    if (lang == "de") {
      $("button[btn-next]").text("Nächster Arbeitsschritt");
    } else if (lang == "en") {
      $("button[btn-next]").text("Next Working-Step");
    }

    scroll += 30;
    count += 1;
    if (count == 9 && currentStep != 99) {
      if (lang == "de") {
        $("button[btn-next]").text("Nächstes Arbeitspaket");
      } else if (lang == "en") {
        $("button[btn-next]").text("Next Working-Package");
      }
    } else if (count == 10 && currentStep != 100) {
      $("#barStep-" + (parseInt(currentStep) - 9)).removeClass("active");
      $("#barStep-" + (parseInt(currentStep) + 1)).addClass("active");
      if (lang == "de") {
        $("button[btn-next]").text("Nächster Arbeitsschritt");
      } else if (lang == "en") {
        $("button[btn-next]").text("Next Working-Step");
      }
      count = 0;
    }

    if (currentStep == 99) {
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
      "../assets/vid/" + $("#steps-container").attr("step") + ".mp4";
    $("#video").attr("src", videoFile);
    $("#videoDiv video")[0].load();
    $("#play-vid-modal").modal("show");
  });
});

// $('input[type=checkbox]:checked').length

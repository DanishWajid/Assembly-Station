$(document).ready(function() {
  var stepMove = false;

  $("button[btn-next]").click(function() {
    const currentStep = $("#steps-container").attr("step");
    $("#steps-container").attr("step", parseInt(currentStep) + 1);
    $("#step-" + currentStep).addClass("d-none");
    $("#step-" + (parseInt(currentStep) + 1)).removeClass("d-none");

    if (stepMove) {
      $("#barStep-" + currentStep).removeClass("active");
      $("#barStep-" + (parseInt(currentStep) + 1)).addClass("active");
    } else {
      $("#barStep-" + currentStep).addClass("d-none");
      $("#barStep-" + currentStep).removeClass("active");
      $("#barStep-" + (parseInt(currentStep) + 1)).addClass("active");
      $("#barStep-" + (parseInt(currentStep) + 5)).removeClass("d-none");
    }

    if (currentStep == 39) {
      $("button[btn-next]").addClass("d-none");
      $("a[btn-submit]").removeClass("d-none");
    }
    if (currentStep == 34) {
      $("#barStep-extention").addClass("d-none");
      stepMove = true;
    }
  });

  $("button[btn-play]").click(function() {
    var videoFile = "assets/vid/" + $("#steps-container").attr("step") + ".mp4";
    $("#video").attr("src", videoFile);
    $("#videoDiv video")[0].load();
    $("#play-vid-modal").modal("show");
  });
});

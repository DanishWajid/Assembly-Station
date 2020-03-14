$(document).ready(function() {
  var arrLang = {
    en: {
      title: "Assembly Station",
      welcome: "Welcome to the assembly station",
      select: "Select Language",
      videoError: "Your browser does not support the video tag.",
      steps: "Steps",
      play: "Play Video",
      next: "Next Step",
      step1: "Directions for Step 1",
      description1: "This is step 1",
      step2: "Directions for Step 2",
      description2: "This is step 2",
      step3: "Directions for Step 3",
      description3: "This is step 3",
      step4: "Directions for Step 4",
      description4: "This is step 4",
      step5: "Directions for Step 5",
      description5: "This is step 5",
      step6: "Directions for Step 6",
      description6: "This is step 6",
      step7: "Directions for Step 7",
      description7: "This is step 7",
      step8: "Directions for Step 8",
      description8: "This is step 8",
      step9: "Directions for Step 9",
      description9: "This is step 9",
      step10: "Directions for Step 10",
      description10: "This is step 10",
      step11: "Directions for Step 11",
      description11: "This is step 11",
      step12: "Directions for Step 12",
      description12: "This is step 12",
      step13: "Directions for Step 13",
      description13: "This is step 13",
      step14: "Directions for Step 14",
      description14: "This is step 14",
      step15: "Directions for Step 15",
      description15: "This is step 15",
      step16: "Directions for Step 16",
      description16: "This is step 16",
      step17: "Directions for Step 17",
      description17: "This is step 17",
      step18: "Directions for Step 18",
      description18: "This is step 18",
      step19: "Directions for Step 19",
      description19: "This is step 19",
      step20: "Directions for Step 20",
      description20: "This is step 20",
      step21: "Directions for Step 21",
      description21: "This is step 21",
      step22: "Directions for Step 22",
      description22: "This is step 22",
      step23: "Directions for Step 23",
      description23: "This is step 23",
      step24: "Directions for Step 24",
      description24: "This is step 24",
      step25: "Directions for Step 25",
      description25: "This is step 25",
      step26: "Directions for Step 26",
      description26: "This is step 26",
      step27: "Directions for Step 27",
      description27: "This is step 27",
      step28: "Directions for Step 28",
      description28: "This is step 28",
      step29: "Directions for Step 29",
      description29: "This is step 29",
      step30: "Directions for Step 30",
      description30: "This is step 30",
      step31: "Directions for Step 31",
      description31: "This is step 31",
      step32: "Directions for Step 32",
      description32: "This is step 32",
      step33: "Directions for Step 33",
      description33: "This is step 33",
      step34: "Directions for Step 34",
      description34: "This is step 34",
      step35: "Directions for Step 35",
      description35: "This is step 35",
      step36: "Directions for Step 36",
      description36: "This is step 36",
      step37: "Directions for Step 37",
      description37: "This is step 37",
      step38: "Directions for Step 38",
      description38: "This is step 38",
      step39: "Directions for Step 39",
      description39: "This is step 39",
      step40: "Directions for Step 40",
      description40: "This is step 40",
      submit: "Submit",
      success: "Congratulations",
      successMsg: "You have successfully completed the program.",
      restart: "Restart"
    },
    de: {
      title: "Montagestation",
      welcome: "Willkommen in der Montagestation",
      select: "Sprache auswählen",
      videoError: "Ihr Browser unterstützt das Video-Tag nicht.",
      steps: "Schritte",
      play: "Video Abspielen",
      next: "Nächster Schritt",
      step1: "Anweisungen für Schritt 1",
      description1: "Dies ist Schritt 1",
      step2: "Anweisungen für Schritt 2",
      description2: "Dies ist Schritt 2",
      step3: "Anweisungen für Schritt 3",
      description3: "Dies ist Schritt 3",
      step4: "Anweisungen für Schritt 4",
      description4: "Dies ist Schritt 4",
      step5: "Anweisungen für Schritt 5",
      description5: "Dies ist Schritt 5",
      step6: "Anweisungen für Schritt 6",
      description6: "Dies ist Schritt 6",
      step7: "Anweisungen für Schritt 7",
      description7: "Dies ist Schritt 7",
      step8: "Anweisungen für Schritt 8",
      description8: "Dies ist Schritt 8",
      step9: "Anweisungen für Schritt 9",
      description9: "Dies ist Schritt 9",
      step10: "Anweisungen für Schritt 10",
      description10: "Dies ist Schritt 10",
      step11: "Anweisungen für Schritt 11",
      description11: "Dies ist Schritt 11",
      step12: "Anweisungen für Schritt 12",
      description12: "Dies ist Schritt 12",
      step13: "Anweisungen für Schritt 13",
      description13: "Dies ist Schritt 13",
      step14: "Anweisungen für Schritt 14",
      description14: "Dies ist Schritt 14",
      step15: "Anweisungen für Schritt 15",
      description15: "Dies ist Schritt 15",
      step16: "Anweisungen für Schritt 16",
      description16: "Dies ist Schritt 16",
      step17: "Anweisungen für Schritt 17",
      description17: "Dies ist Schritt 17",
      step18: "Anweisungen für Schritt 18",
      description18: "Dies ist Schritt 18",
      step19: "Anweisungen für Schritt 19",
      description19: "Dies ist Schritt 19",
      step20: "Anweisungen für Schritt 20",
      description20: "Dies ist Schritt 20",
      step21: "Anweisungen für Schritt 21",
      description21: "Dies ist Schritt 21",
      step22: "Anweisungen für Schritt 22",
      description22: "Dies ist Schritt 22",
      step23: "Anweisungen für Schritt 23",
      description23: "Dies ist Schritt 23",
      step24: "Anweisungen für Schritt 24",
      description24: "Dies ist Schritt 24",
      step25: "Anweisungen für Schritt 25",
      description25: "Dies ist Schritt 25",
      step26: "Anweisungen für Schritt 26",
      description26: "Dies ist Schritt 26",
      step27: "Anweisungen für Schritt 27",
      description27: "Dies ist Schritt 27",
      step28: "Anweisungen für Schritt 28",
      description28: "Dies ist Schritt 28",
      step29: "Anweisungen für Schritt 29",
      description29: "Dies ist Schritt 29",
      step30: "Anweisungen für Schritt 30",
      description30: "Dies ist Schritt 30",
      step31: "Anweisungen für Schritt 31",
      description31: "Dies ist Schritt 31",
      step32: "Anweisungen für Schritt 32",
      description32: "Dies ist Schritt 32",
      step33: "Anweisungen für Schritt 33",
      description33: "Dies ist Schritt 33",
      step34: "Anweisungen für Schritt 34",
      description34: "Dies ist Schritt 34",
      step35: "Anweisungen für Schritt 35",
      description35: "Dies ist Schritt 35",
      step36: "Anweisungen für Schritt 36",
      description36: "Dies ist Schritt 36",
      step37: "Anweisungen für Schritt 37",
      description37: "Dies ist Schritt 37",
      step38: "Anweisungen für Schritt 38",
      description38: "Dies ist Schritt 38",
      step39: "Anweisungen für Schritt 39",
      description39: "Dies ist Schritt 39",
      step40: "Anweisungen für Schritt 40",
      description40: "Dies ist Schritt 40",
      submit: "Einreichen",
      success: "Herzliche Glückwünsche",
      successMsg: "Sie haben das Programm erfolgreich abgeschlossen.",
      restart: "Neustart"
    }
  };
  if (localStorage.getItem("language") != null) {
    var lang = localStorage.getItem("language");

    if (lang == "de") {
      $("#de").addClass("focus");
      $("#en").removeClass("focus");
    }
    if (lang == "en") {
      $("#en").addClass("focus");
      $("#de").removeClass("focus");
    }
    $(".lang").each(function(index, item) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  }

  // Process translation
  $(function() {
    $(".translate").click(function() {
      var lang = localStorage.getItem("language");
      if (lang == "de") {
        $("#de").addClass("focus");
        $("#en").removeClass("focus");
      }
      if (lang == "en") {
        $("#en").addClass("focus");
        $("#de").removeClass("focus");
      }

      $(".lang").each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
      });
    });
  });
});

function setLanguage(lang) {
  localStorage.setItem("language", lang);
}

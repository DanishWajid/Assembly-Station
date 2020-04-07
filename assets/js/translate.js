$(document).ready(function() {

    var arrLang = {
        en: {
            welcome: "Welcome to the assembly station",
            select: "Select Language",
            videoError: "Your browser does not support the video tag.",
            steps: "Steps",
        },
        de: {
            welcome: "Willkommen in der Montagestation",
            select: "Sprache auswählen",
            videoError: "Ihr Browser unterstützt das Video-Tag nicht.",
            steps: "Schritte",
        }
    };


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
                $("#start").attr("href", "de/steps.html");
            }
            if (lang == "en") {
                $("#en").addClass("focus");
                $("#de").removeClass("focus");
                $("#start").attr("href", "en/steps.html");
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
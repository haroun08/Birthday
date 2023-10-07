$(document).ready(function () {
    $("#show1").click(function () {
        var audio = new Audio('sound/sound.mp3');
        audio.play();
        $("#show1").hide();

        $(".first").delay(1000).fadeIn(1000, function () {
            $(".first").click(function () {
                $(".second").delay(1000).fadeIn(1000, function () {
                    $(".second").click(function () {
                        $(".third").delay(1000).fadeIn(1000, function () {
                            $(".third").click(function () {
                                $(".first, .second, .third").text("Happy Birthday");
                                $("body").css({
                                    "background-image": "url('images/background.jpg')",
                                    "background-repeat": "no-repeat",
                                    "background-size": "cover"
                                });
                                var audio = new Audio('sound/sound.mp3');
                                audio.play();
                            });
                        });
                    });
                });
            });
        });
    });
});

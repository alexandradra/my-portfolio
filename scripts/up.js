$(window).scroll(function() {

        if ($(document).scrollTop() <= 0) {
            $('#up').css("display", "none");
        } else {
            $('#up').css("display", "block");
        };

});

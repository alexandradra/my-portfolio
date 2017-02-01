$(document).ready(function() {
    $('.gotocont').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 900; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('.shape').animate({top: '-=5'}, 5);
        } else {
            $('.shape').animate({top: '+=5'}, 5);
        }
        lastScrollTop = st;
    });
});

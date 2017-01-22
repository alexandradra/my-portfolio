document.addEventListener("DOMContentLoaded", function(event) {
    var nav = document.getElementById('main-nav');
    var btn = document.getElementById("open-nav");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        nav.style.display = "block";
        btn.style.display = "none";
        if (nav.classList.contains('is-paused')) {
            nav.classList.remove('is-paused');
        }
    }
    span.onclick = function() {
        nav.style.display = "none";
        btn.style.display = "block";
    }
    document.onclick = function(event) {
        if (event.target == nav) {
            nav.style.display = "none";
            btn.style.display = "block";
        }
    }
});

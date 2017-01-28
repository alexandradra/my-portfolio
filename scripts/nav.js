document.addEventListener("DOMContentLoaded", function(event) {
    let li = document.getElementsByClassName('nav-item');
    let nav = document.getElementById('main-nav');
    let btn = document.getElementById("open-nav");
    let close = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        nav.style.display = "block";
        btn.style.display = "none";
        if (nav.classList.contains('is-paused')) {
            nav.classList.remove('is-paused');
        }
    }
    close.onclick = function() {
        nav.style.display = "none";
        btn.style.display = "block";
    }
    li.onclick = function() {
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

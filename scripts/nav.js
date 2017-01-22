var modal = document.getElementById('main-nav');
var btn = document.getElementById("open-nav");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
    btn.style.display = "none";
}
span.onclick = function() {
    modal.style.display = "none";
    btn.style.display = "block";
}
document.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        btn.style.display = "block";
    }
}

$(document).ready(function() {
  // Smooth scoll
  $('.gotocont').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 900; // Durée de l'animation (en ms)
    $('html, body').animate({
      scrollTop: $(page).offset().top
    }, speed); // Go
    return false;
  });
  var lastScrollTop = 0;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $('.shape').animate({
        top: '-=5'
      }, 5);
    } else {
      $('.shape').animate({
        top: '+=5'
      }, 5);
    }
    lastScrollTop = st;
  });
  // title
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1500;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };

});
// Nav
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
// Hide / show go to top
$(window).scroll(function() {

  if ($(document).scrollTop() <= 0) {
    $('#up').css("display", "none");
  } else {
    $('#up').css("display", "block");
  };

});

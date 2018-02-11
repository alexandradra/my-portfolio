$( document ).ready(function() {
  var nav = $("#main-nav");
  var btn = $("#open-nav");
  var span = $(".close")[0];
  btn.click = (function() {
      nav.show();
      btn.hide();
  });
  span.click = (function() {
      nav.hide();
      btn.show();
  });
  document.click = (function(event) {
      if (event.target == nav) {
        nav.hide();
        btn.show();
      }
  });

});

$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
});

$(function(){
    var navMain = $("#myNavbar");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});



// dit activeert smooth scolling
// ik heb all opties in de functie uitgezet.
// voor meer info check hier
// http://projects.lukehaas.me/scrollify
// https://github.com/rahullakhaney/scrollify
$(function() {
$.scrollify({
  section : "section",
  // sectionName : "section-name",
  easing: "easeOutExpo",
  scrollSpeed: 1000,
  offset : 0,
  scrollbars: true,
  // standardScrollElements: "",
  // setHeights: true,
  // before:function() {},
  // after:function() {},
  // afterResize:function() {},
  // afterRender:function() {}
});
});

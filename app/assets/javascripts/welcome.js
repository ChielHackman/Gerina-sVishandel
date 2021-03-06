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

// function to close the navbar when clicking a item on mobile
$(function(){
    var navMain = $("#myNavbar");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

// function to call the day of the week and show where we are
  function getToday() {
      var d = new Date() ;
      var weekday = new Array(7);
      weekday[0] = "<red>Vandaag zijn wij gesloten</red>";
      weekday[1] = "<red>Vandaag zijn wij gesloten</red>";
      weekday[2] = "Vandaag zijn wij in Bathmen <green>10:30</green> - <red>13:00</red> & Oene <green>14:00</green> - <red>18:00</red>";
      weekday[3] = "Vandaag zijn wij in Kampen <green>10:30</green> - <red>17:00</red>";
      weekday[4] = "Vandaag zijn wij op Keizerslanden <green>10:00</green> - <red>17:00</red>, in Wesepe <green>10:30</green> - <red>13:00</red> en in Diepenveen <green>14:00</green> - <red>17:30</red>";
      weekday[5] = "Vandaag zijn wij op Keizerslanden <green>10:00</green> - <red>17:00</red>, in Wijhe <green>10:30</green> - <red>13:00</red> en in Twello <green>15:00</green> - <red>18:00</red>";
      weekday[6] = "Vandaag zijn wij op Keizerslanden <green>10:00</green> - <red>17:00</red>, in Wijhe <green>10:00</green> - <red>17:00</red> en in Diepenveen <green>10:00</green> - <red>17:00</red>";

      var n = weekday[d.getDay()];
      document.getElementById("today").innerHTML = n;
  }

//function to hide footer when keypad comes up on mobile
var originalHeight = document.documentElement.clientHeight;
var originalWidth = document.documentElement.clientWidth;
$(window).resize(function() {
    // Control landscape/portrait mode switch
    if (document.documentElement.clientHeight == originalHeight &&
         document.documentElement.clientWidth == originalWidth) {
        originalHeight = document.documentElement.clientHeight;
        originalWidth = document.documentElement.clientWidth;
    }
    // Check if the available height is smaller (keyboard is shown) so we hide the footer.
   if (document.documentElement.clientHeight < originalHeight) {
       $('#footer').hide();
   } else {
       $('#footer').show();
   }
});

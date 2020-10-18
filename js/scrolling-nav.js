(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict







/*Learn*/
anime.timeline({loop: true})
 .add({ targets: '.ml5 .line', opacity: 
 [0.5,1], scaleX: [0, 1], easing: 
 "easeInOutExpo", duration: 700 }).add({ targets:
      '.ml5 .line', duration: 600, easing: 
      "easeOutExpo", translateY: (el, i) =>
       (-0.625 + 0.625*2*i) + "em" }).add({ targets:
            '.ml5 .ampersand', opacity: [0,1], scaleY: [0.5, 1],
             easing: "easeOutExpo", duration: 600, offset: 
             '-=600' }).add({ targets: '.ml5 .letters-left', 
             opacity: [0,1], translateX: ["0.5em", 0], easing: "easeOutExpo", 
             duration: 600, offset: '-=300' }).add({ targets: 
             '.ml5 .letters-right', opacity: [0,1], translateX: 
             ["-0.5em", 0], easing: "easeOutExpo", duration: 600, offset: 
             '-=600' }).add({ targets: '.ml5', opacity: 0, duration: 1000, 
             easing: "easeOutExpo", delay: 1000 });
             
 /*photo*/
 // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml9 .letters'); textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); anime.timeline({loop: true}) .add({ targets: '.ml9 .letter', scale: [0, 1], duration: 1500, elasticity: 600, delay: (el, i) => 45 * (i+1) }).add({ targets: '.ml9', opacity: 0, duration: 1000, easing: "easeOutExpo", delay: 1000 });
  

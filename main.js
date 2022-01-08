
!(function($) {
    "use strict";
  



  
    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .scrollto', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
  
          var scrollto = target.offset().top;
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 800, 'easeInOutExpo');
  
          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          }
          return false;
        }
      }
    });
  
    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function() {
      if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
          var scrollto = $(initial_nav).offset().top;
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
        }
      }
    });
  
    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    });
  
    $(document).click(function(e) {
      var container = $(".mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
      }
    });
  
    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');
  
    $(window).on('scroll', function() {
      var cur_pos = $(this).scrollTop() + 200;
  
      nav_sections.each(function() {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
          $(".nav-menu ul:first li:first").addClass('active');
        }
      });
    });
  
    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('normal');
      }
    });
  
    $('.back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
    });
  
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
      delay: 3,
      time: 1000
    });
  
  
    // gallery isotope and filter
    $(window).on('load', function() {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });
  
      $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
  
        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
        aos_init();
      });
  
      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function() {
        $('.venobox').venobox();
      });
    });
  
  
  
    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });
  
    // Init AOS
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out-back",
       Infinity: true
      });
    }
    $(window).on('load', function() {
      aos_init();
    });
  



  })(jQuery);




  /////////////////////////////////////////////////////////////////////////
let submitBtn = document.querySelector(".submit-btn");
let names = document.querySelector(".name");
let email = document.querySelector(".email");
let subject = document.querySelector(".subject");
let message = document.querySelector(".message");
let errorMsg = document.querySelector(".error-msg");

submitBtn.addEventListener("click", function () {
  if (names.value == "") {
    errorMsg.textContent = "Please input your name";
    names.style.border = "2px solid red";
  } else if (email.value == "") {
    errorMsg.textContent = "Please input your email";
    email.style.border = "2px solid red";
  } else if (subject.value == "") {
    errorMsg.textContent = "Please input subject";
    subject.style.border = "2px solid red";
  } else if (message.value == "") {
    errorMsg.textContent = "Write something";
    message.style.border = "2px solid red";
  }

  if (names.value != "") {
    names.style.border = "1px solid black";
  }
  if (email.value != "") {
    email.style.border = "1px solid black";
  }
  if (subject.value != "") {
    subject.style.border = "1px solid black";
  }
  if (message.value != "") {
    message.style.border = "1px solid red";
  }

  function isValidEmail() {
    let msg = "";
    let atCount = 0;
    let a = email.value.split("");
    for (let i = 0; i < a.length; i++) {
      if (a[i] == "@") {
        // console.log(a);
        atCount++;
      }
      if (atCount >= 1) {
        msg = "Valid Email";
        errorMsg.textContent = msg;
        errorMsg.style.color = "green";
         email.style.border = "1px solid black";
      } else if (atCount == 0) {
        msg = "Please Input Valid Email";
        errorMsg.textContent = msg;
        errorMsg.style.color = "red";
        email.style.border = "2px solid red";
      }
    }
 

    if (
      names.value != "" &&
      email.value != "" &&
      subject.value != "" &&
      message.value != "" &&
      msg == "Valid Email"
    ) {
      alert("You have submitted your response");
      errorMsg.style.color = "green";
      errorMsg.textContent = "Submitted. Thank you!";
    }
  }
  isValidEmail();
});

/////////////////////////////////////////////////////////////////////////////

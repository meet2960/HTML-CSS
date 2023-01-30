// * Quiz Slider Script Here
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// *  Blog Slider Script Here
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// * Educational Slider Script Here
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// * Navigation Class Change Script Here
$(document).ready(function () {
  // * Navigation Starts Here
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var header = $(".navigation");
    if (scroll >= 50) {
      console.log("Inside If Statement...!!!");
      $(header).addClass("navigation-toggle");
      // header.removeClass("navigation").addClass("navigation-toggle");
    } else {
      console.log("Inside Else Statement..!!!");
      $(header).removeClass("navigation-toggle");
      // $(header).removeClass('navigation-toggle').addClass("navigation");
      // header.removeClass("navigation-toggle").addClass("navigation");
    }
  });
  // * Navigation Script Ends Here
  // * Get Quote Insurance Hover JQuery Starts Here
  $(function () {
    $("#w").hover(
      function () {
        $("#a").css("background-color", "rgb(243, 126, 53)");
      },
      function () {
        $("#a").css("background-color", "rgb(1, 56, 116)");
      }
    );
  });

  $(function () {
    $("#x").hover(
      function () {
        $("#b").css("background-color", "rgb(243, 126, 53)");
      },
      function () {
        $("#b").css("background-color", "rgb(1, 56, 116)");
      }
    );
  });

  $(function () {
    $("#y").hover(
      function () {
        $("#c").css("background-color", "rgb(243, 126, 53)");
      },
      function () {
        $("#c").css("background-color", "rgb(1, 56, 116)");
      }
    );
  });

  $(function () {
    $("#z").hover(
      function () {
        $("#d").css("background-color", "rgb(243, 126, 53)");
      },
      function () {
        $("#d").css("background-color", "rgb(1, 56, 116)");
      }
    );
  });
  // * Get Quote Insurance Hover JQuery Ends Here

  // // * Insurance class toggle Script Starts Here
  // $('.plan_background').click(function () {
  //   $('.plan_background').removeClass("plan_background-active");
  //   $(this).addClass("plan_background-active");
  // });
  // // * Insurance class toggle Script Ends Here
});

// * Insurance class toggle Script Starts Here
var btns = document.getElementsByClassName("plan_background");  
for (var i = 0; i < btns.length; i++) {  
  btns[i].addEventListener("click", function() {  
  var current = document.getElementsByClassName("plan_background-active");  
  if (current.length > 0) {   
    current[0].className = current[0].className.replace(" plan_background-active", "");  
  }  
  this.className += " plan_background-active";  
  });  
}  
// * Insurance class toggle Script Ends Here


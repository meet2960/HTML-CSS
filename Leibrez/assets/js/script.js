var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
  },
});
// * BacktoTop Button Script Starts Here
let mybutton = document.getElementById("topbtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// * BacktoTop Button Script Starts Here

// * Navlink Active class toggle Script Starts Here
var navs = document.getElementsByClassName("nav-link");
for (var i = 0; i < navs.length; i++) {
  console.log("Inside Button Click");
  navs[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activ-link");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" activ-link", "");
    }
    this.className += " activ-link";
  });
}
// console.log("Hello World");
// * Navlink Active class toggle Script Ends Here

// * Navbar Class Toggle Script Starts Here
function heroHeight() {
  let heroHeight = $(".herobg").outerHeight() - 80;
  var header = $(".navigation");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(heroHeight);
    if (scroll >= heroHeight) {
      header.removeClass("navigation").addClass("navigation-toggle");
    } else {
      header.removeClass("navigation-toggle").addClass("navigation");
    }
  });
}
heroHeight();
$(window).resize(function () {
  heroHeight();
});
// * Navbar Class Toggle Script Ends Here

$(function () {
  $(".inspiration").hover(function () {
    $(".company_inspiration").toggleClass("cid");
  });
});
$(function () {
  $(".inspiration2").hover(function () {
    $(".company_inspiration").toggleClass("cid2");
  });
});

$(function () {
  $(window).on("load", function () {
    $(".page-loader").delay("500").fadeOut(1000);
  });

  $(document).ready(function () {
    $(document).on("click", ".icon-menu", function () {
      $(".responsive-sidebar-menu").addClass("active");
    });
    $(document).on("click", ".responsive-sidebar-menu .overlay", function () {
      $(".responsive-sidebar-menu").removeClass("active");
    });

    $(document).on("click", ".menu li .scroll-to", function () {
      $(".responsive-sidebar-menu").removeClass("active");
    });

    $(document).on("click", ".color-boxed a", function () {
      $(".color-boxed a").removeClass("clr-active");
      $(this).addClass("clr-active");
    });

    $(document).on("click", ".global-color .setting-toggle", function () {
      $(".global-color").addClass("active");
    });

    $(document).on(
      "click",
      ".global-color .inner .overlay, .global-color .inner .global-color-option .close-settings",
      function () {
        $(".global-color").removeClass("active");
      }
    );
  });

  $(window)
    .scroll(function () {
      var windscroll = $(window).scrollTop();
      if (windscroll >= 0) {
        $(".page-section").each(function (i) {
          if ($(this).position().top <= windscroll - -1) {
            $(".scroll-nav .scroll-to.active").removeClass("active");
            $(".scroll-nav .scroll-to").eq(i).addClass("active");
            $(".scroll-nav-responsive a.active").removeClass("active");
            $(".scroll-nav-responsive a").eq(i).addClass("active");
          }
        });
      } else {
        $(".scroll-nav .scroll-to.active").removeClass("active");
        $(".scroll-nav .scroll-to:first").addClass("active");
        $(".scroll-nav-responsive a.active").removeClass("active");
        $(".scroll-nav-responsive a:first").addClass("active");
      }

      if (windscroll >= 0) {
        $(".scroll-to-page").each(function (i) {
          var wscrolldecress = windscroll + 1;
          // console.log(wscrolldecress);
          if ($(this).position().top <= wscrolldecress - 0) {
            $(".scroll-nav .scroll-to.active").removeClass("active");
            $(".scroll-nav .scroll-to").eq(i).addClass("active");
            $(".scroll-nav-responsive a.active").removeClass("active");
            $(".scroll-nav-responsive a").eq(i).addClass("active");
          }
        });
      } else {
        $(".scroll-nav .scroll-to.active").removeClass("active");
        $(".scroll-nav .scroll-to:first").addClass("active");
        $(".scroll-nav-responsive a.active").removeClass("active");
        $(".scroll-nav-responsive a:first").addClass("active");
      }
    })
    .scroll();

  if ($(".testimonial-slider").length) {
    var testimonial = $(".testimonial-slider").owlCarousel({
      items: 1,
      margin: 30,
      stagePadding: 0,
      smartSpeed: 450,
      autoHeight: true,
      loop: false,
      nav: false,
      dots: false,
      onInitialized: counter, //When the plugin has initialized.
      onTranslated: counter, //When the translation of the stage has finished.
    });

    $(".testimonial-nav .next").on("click", function () {
      testimonial.trigger("next.owl.carousel");
    });
    $(".testimonial-nav .prev").on("click", function () {
      testimonial.trigger("prev.owl.carousel", [300]);
    });

    function counter(event) {
      var element = event.target; // DOM element, in this example .owl-carousel
      var items = event.item.count; // Number of items
      var item = event.item.index + 1; // Position of the current item

      // it loop is true then reset counter from 1
      if (item > items) {
        item = item - items;
      }
      $("#testimonial-slide-count").html(
        "<span class='left'>" + item + "</span> / " + items
      );
    }
  }

  // function remove_is_active() {
  //     $(".menu .scroll-to").removeClass("active");
  // }

  // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // var container = document.querySelector("#smooth-content");

  // var height;
  // function setHeight() {
  //     height = container.clientHeight;

  //     document.body.style.height = height + "px";
  // }
  // ScrollTrigger.addEventListener("refreshInit", setHeight);

  // gsap.to(container, {
  //     y: () => -(height - document.documentElement.clientHeight),
  //     ease: "none",
  //     scrollTrigger: {
  //         trigger: container,
  //         start: "top top",
  //         end: "bottom bottom",
  //         scrub: 1,
  //         invalidateOnRefresh: true,
  //     }
  // });

  window.addEventListener("scroll", {
    scroll_animations,
  });

  // Array.prototype.slice.call(document.querySelectorAll(".page-section")).forEach(function (e, t) {
  //     ScrollTrigger.create({
  //         trigger: e,
  //         id: t + 1,
  //         start: "top center",
  //         end: function () {
  //             return "+=".concat(e.clientHeight - 30);
  //         },
  //         toggleActions: "play reverse none reverse",
  //         toggleClass: { targets: e, className: "active" },
  //         onToggle: function () {
  //             $(".menu .scroll-to").removeClass("active"), "" != e.id && $('.menu .scroll-to[href*="#' + e.id + '"]').addClass("active");
  //         },
  //     });
  // });

  // document.querySelectorAll('.scroll-to').forEach((e) => {
  //     const target = e.getAttribute('href');
  //     const targetEl = document.querySelector(target);
  //     // const targetRect = targetEl.getBoundingClientRect();

  //     var offset = gsap.getProperty("#smooth-content", "y");
  //     var position = jQuery(target).get(0).getBoundingClientRect().top - offset;

  //     e.addEventListener('click', (e) => {
  //         e.preventDefault();

  //         gsap.to(window, {
  //             scrollTo: position,
  //             ease: "power4",
  //             duration: 0.1,
  //             onToggle: function () {
  //                 console.log('toggle');
  //                 remove_is_active();
  //                 if (targetEl.id != "") $('.menu .scroll-to[href*="#' + targetEl.id + '"]').addClass("active");
  //             },
  //             onLeaveBack: function () {
  //                 console.log('leave back');
  //                 remove_is_active();
  //                 if (targetEl.id != "") $('.menu .scroll-to[href*="#' + targetEl.id + '"]').addClass("active");
  //             },
  //             onLeave: function () {
  //                 console.log('leave');
  //                 remove_is_active();
  //                 if (targetEl.id != "") $('.menu .scroll-to[href*="#' + targetEl.id + '"]').addClass("active");
  //             },
  //             overwrite: !0,
  //         });
  //     });

  // });
});

function scroll_animations() {
  // var allow_on_mobile = !0;
  // if (typeof config_scroll_animation_on_mobile !== "undefined") allow_on_mobile = config_scroll_animation_on_mobile;
  // if (allow_on_mobile == !1 && is_mobile_device) return;
  var defaults = {
    duration: 1.2,
    ease: "power4.out",
    animation: "fade_from_bottom",
    once: !1,
  };
  gsap.utils.toArray(".scroll-animation").forEach(function (box) {
    var gsap_obj = {};
    var settings = {
      // ease: box.dataset.animationEase || defaults.ease,
      duration: box.dataset.animationDuration || defaults.duration,
    };
    var animations = {
      fade_from_bottom: {
        y: 180,
        opacity: 0,
      },
      fade_from_top: {
        y: -180,
        opacity: 0,
      },
      fade_from_left: {
        x: -180,
        opacity: 0,
      },
      fade_from_right: {
        x: 180,
        opacity: 0,
      },
      fade_in: {
        opacity: 0,
      },
      rotate_up: {
        y: 180,
        rotation: 10,
        opacity: 0,
      },
    };
    var scroll_trigger = {
      scrollTrigger: {
        trigger: box,
        once: defaults.once,
        start: "top bottom+=20%",
        // start: "top bottom+=5%",
        toggleActions: "play none none reverse",
        markers: !1,
      },
    };
    jQuery.extend(gsap_obj, settings);
    jQuery.extend(
      gsap_obj,
      animations[box.dataset.animation || defaults.animation]
    );
    jQuery.extend(gsap_obj, scroll_trigger);
    gsap.from(box, gsap_obj);
  });
}
scroll_animations();


const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
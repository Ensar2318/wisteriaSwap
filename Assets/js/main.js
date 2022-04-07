$(document).ready(function() {

    // Nav clos open side

    $("#closeNav").click(function(e) {
        e.preventDefault();
        $(".left-navbar").css("max-width", "0");
    });

    $("#openNav").click(function(e) {
        e.preventDefault();
        $(".left-navbar").css("max-width", "214px");
    });

    //nav 100px top olarak aşşa inerse olan js
    var x = window.matchMedia("(max-width: 1000px)");
    $(document).scroll(function() {
        if (x.matches) {
            $(".left-navbar").css("top", 0);
            $(".open-nav").css("top", 0);
        } else {
            if (window.pageYOffset >= 100) {
                $(".left-navbar").css("top", 0);
                $(".open-nav").css("top", 0);
            } else {
                $(".left-navbar").css("top", 60);
                $(".open-nav").css("top", 104);
            }
        }

    });

    // scroll down oldugunda event up oldugunda bi event kodu
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // downscroll code
            $(".open-nav").css("max-height", "0");
        } else {
            // upscroll code
            $(".open-nav").css("max-height", "150px");
        }
        lastScrollTop = st;
    });

    // Dropdown acma kapama

    $(".dropdown-ac-kapa").click(function(e) {
        e.preventDefault();

        if ($(this).hasClass("active")) {
            $(this).removeClass("active").children(".right").removeClass("active-rotate").parent().next(".dropdown").removeClass("openedDropdown");
            
        } else {
            $(".dropdown-ac-kapa").children(".right").removeClass("active-rotate");
            $(".dropdown-ac-kapa").removeClass("active");
            $(".dropdown-ac-kapa").next(".dropdown").removeClass("openedDropdown");

           $(this).addClass("active").children(".right").addClass("active-rotate").parent().next(".dropdown").addClass("openedDropdown");
        }


    });







    // Swipper js kodları
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {

            768: {
                slidesPerView: 2,

            },
            1200: {
                slidesPerView: 3,

            },
        }
    });


});
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


    // Call Options Details Tab Bar Side

    $(".details .tab-title").click(function(e) {
        e.preventDefault();
        console.log($(this).text());
        if ($(this).next(".tab-content").hasClass("active-tab")) {
            $(this).children("i").removeClass("active-icon").parent().next(".tab-content").removeClass("active-tab");
        } else {
            $(".details .tab-title i").removeClass("active-icon").parent().next(".tab-content").removeClass("active-tab");
            $(this).children("i").addClass("active-icon").parent().next(".tab-content").addClass("active-tab");
        }
    });

    // İnput range ayarlama kısmı bridge.html
    $("#myRange").on("input change", function() {
        $("#rangeCount").text($(this).val());
    });




    // Swipper js kodları index.html
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

    // Bridge html swipper js kodları
    var swiper = new Swiper(".bridge-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".bridge-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".bridge-button-next",
            prevEl: ".bridge-button-prev",
        },
    });

    // Sayfa indiginde calısan kod
    AOS.init({
        duration: 2000,
        once: true,
    });


    // bridge count



});
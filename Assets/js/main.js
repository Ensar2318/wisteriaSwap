$(document).ready(function() {


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
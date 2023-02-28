$(document).ready(function(){
  var mainSwiper = new Swiper(".main_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".main_pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main_swiper_next",
      prevEl: ".main_swiper_prev",
    },
  });


  var bestSwiper = new Swiper(".best_swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".best_swiper_next",
      prevEl: ".best_swiper_prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  var giftSwiper = new Swiper(".gift_swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".gift_swiper_next",
      prevEl: ".gift_swiper_prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
  AOS.init({
    duration: 1200,
  });


  $(window).scroll(function(){
    if($(document).scrollTop() >= $('.main_visual').height() / 2 ){
      $('.gotop').addClass('show');
    }else{
      $('.gotop').removeClass('show');
    }
    
  });

  $('.gotop').click(function(){
    $('html, body').animate({scrollTop: 0 }, 'slow');
    console.log('dd');
  })
})  

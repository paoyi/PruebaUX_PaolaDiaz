const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 768
      768: {
        slidesPerView: 2.5,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
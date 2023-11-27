
const swiper = new Swiper('.main-inner__slider', {
  pagination: {
    el: ".fraction",
    type: "fraction",
  },
  navigation: {
    nextEl: ".right",
    prevEl: ".left",
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
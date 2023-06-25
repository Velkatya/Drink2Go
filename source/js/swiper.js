const connectSwiper = () => {
  const swiper = new Swiper('.swiper', {

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
  });

};

export { connectSwiper };

document.addEventListener('DOMContentLoaded', () => {
  console.log('Dom loaded');
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // spaceBetween: '20',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});

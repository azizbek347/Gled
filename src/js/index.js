document.addEventListener('DOMContentLoaded', () => {
  let swiperInstance;
  const breakpoint = window.matchMedia('(min-width:600px)');
  const enbaleSwiper = () => {
    swiperInstance = new Swiper('.swiper', {
      loop: true,
      effect: 'fade',
      autoplay: {
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };
  const checkBreakpoint = () => {
    if (!breakpoint.matches) swiperInstance?.destroy(true, true);
    else enbaleSwiper();
  };
  breakpoint.addEventListener('change', checkBreakpoint);
  checkBreakpoint();

  const headerNav = document.querySelector('.header__nav');
  const menuBtn = document.getElementById('menu-btn');

  const toggle = () => {
    headerNav.classList.toggle('header__nav_toggled');
  };
  menuBtn.addEventListener('click', toggle);

  const linksList = document.querySelector('.header__list');
  linksList.addEventListener('click', (e) => {
    if (e.target.matches('.header__link')) {
      toggle();
    }
  });
});

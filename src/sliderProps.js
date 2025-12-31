import {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";

// Export modules for use in Swiper components
export const swiperModules = {
  testimonial: [Autoplay, Pagination, Navigation],
  default: [Autoplay, EffectCreative, EffectFade, Grid, Mousewheel, Navigation, Pagination, Virtual],
};

export const sliderProps = {
  testimonial: {
    modules: swiperModules.testimonial,
    loop: true,
    spaceBetween: 30,
    speed: 500,
    rewind: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  },
};

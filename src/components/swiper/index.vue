<template>
  <div class="Banner">
    <swiper
      :options="swiperOption"
      v-if="clientWidth > 768"
      ref="mySwiper"
      :auto-play="true"
    >
      <div
        v-if="clientWidth > 768"
        class="swiper-button-prev s-prev"
        slot="button-prev"
      ></div>
      <div
        v-if="clientWidth > 768"
        class="swiper-button-next s-next"
        slot="button-next"
      ></div>
      <swiper-slide v-for="item in banner" :key="item.title">
        <div class="banner-item">
          <img :src="item.image" alt="" width="100%" />
        </div>
      </swiper-slide>
      <!-- 指示点 -->
      <div class="swiper-pagination fx2" slot="pagination"></div>
    </swiper>
    <!-- <img :src="Image" alt=""> -->
    <swiper
      :options="swiperOption_m"
      v-else
      ref="mySwiper"
      :auto-play="true"
    >
      <div
        v-if="clientWidth < 768"
        class="swiper-button-prev s-prev"
        slot="button-prev"
      ></div>
      <div
        v-if="clientWidth < 768"
        class="swiper-button-next s-next"
        slot="button-next"
      ></div>
      <swiper-slide v-for="item in banner_m" :key="item.title">
        <div class="banner-item">
          <img :src="item.image" alt="" width="100%" />
        </div>
      </swiper-slide>
      <!-- 指示点 -->
      <div class="swiper-pagination fx2" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import 'swiper/swiper-bundle.min.css';
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
  Navigation,
  EffectFade
} from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.min.css'
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation, EffectFade])

export default {
  props: {

  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
          initialSlide: 0, //第几个开始播放
        // slidesPerView: 3, // 一行显示3个
        // slidesPerGroup: 3,
        // freeMode: true,
        // slidesPerView: 'auto',
        speed: 1000, // 滑动速度
        effect: 'flip',
        loop: true,
        autoplay: {
          delay: 6000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // loopedSlides: 8,
        navigation: {
          nextEl: ".s-next",
          prevEl: ".s-prev",
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
      },
      swiperOption_m: {
        direction: "horizontal",
        autoplay: {
          delay: 6000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        // slidesPerView: 1.5,
        // slidesPerView: 2,
        // centeredSlides: true,
        // spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
      },
      Image: require('@/assets/swiper/banner1.jpg'),
      banner: [
          {title: 'banner1', image: require('@/assets/swiper/banner1.jpg')},
          {title: 'banner2', image: require('@/assets/swiper/banner2.jpg')},
          {title: 'banner3', image: require('@/assets/swiper/banner3.jpg')}
      ],
      banner_m: [
          {title: 'banner1-m', image: require('@/assets/swiper/banner1-m.jpg')},
          {title: 'banner2-m', image: require('@/assets/swiper/banner2-m.jpg')},
          {title: 'banner3-m', image: require('@/assets/swiper/banner3-m.jpg')}
      ]
    };
  },
  computed: {
    clientWidth() {
      return this.$store.state.clientWidth;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
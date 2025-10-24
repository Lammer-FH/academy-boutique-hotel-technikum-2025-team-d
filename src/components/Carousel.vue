<script>
import {BCarousel, BCarouselSlide} from "bootstrap-vue-3";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
  props: {
    pictures: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<template>
  <div>
    <b-carousel
        v-if="pictures.length"
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        img-width="1024"
        img-height="480"
        style="height: 480px; background-color: #ababab; text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
          v-for="(picture, index) in pictures"
          :key="index"
          :img-src="picture"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style>

</style>

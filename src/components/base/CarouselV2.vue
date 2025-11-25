<script>
export default {
  props: {
    pictures: {
      type: Array,
      required: true
    }
  },
  mounted() {
    const carouselElement = document.getElementById('carouselExample');
    if (carouselElement && window.bootstrap?.Carousel) {
      const carousel = new Carousel(carouselElement, {})
    }
  }
};
</script>

<template>
  <div
      id="carouselExample"
      class="carousel slide"
      data-bs-ride="carousel"
      style="max-width: 1024px; margin: auto;"
  >
    <!-- Slides -->
    <div class="carousel-inner">
      <div
          v-for="(picture, index) in pictures"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
      >
        <img
            :src="picture"
            class="d-block w-100"
            style="height: 480px; object-fit: cover;"
            :alt="`Slide ${index + 1}`"
        />
      </div>
    </div>

    <!-- Prev Button -->
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <!-- Next Button -->
    <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1) drop-shadow(0 0 3px rgba(0, 0, 0, 0.6));
}
</style>

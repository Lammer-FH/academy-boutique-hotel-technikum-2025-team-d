<script>
import BookingComponent from "@/components/booking/BookingComponent.vue";
import DefaultLayout from "@/components/base/DefaultLayout.vue";
import BookingLayout from "@/components/booking/BookingLayout.vue";

export default {
  name: "BookingView",
  components: {BookingLayout, DefaultLayout, BookingComponent}
}
</script>

<template>
  <booking-layout>
    <BookingComponent/>
  </booking-layout>

</template>

<style scoped>

</style>
<script>
import BookingComponent from "@/components/booking/BookingComponent.vue";
import DefaultLayout from "@/components/base/DefaultLayout.vue";

export default {
  name: "BookingView",
  components: {DefaultLayout, BookingComponent}
}
</script>

<template>
  <default-layout>
    <BookingComponent/>
  </default-layout>

</template>

<style scoped>

</style>
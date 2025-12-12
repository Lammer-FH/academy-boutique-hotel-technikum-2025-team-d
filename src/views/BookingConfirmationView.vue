<script>
import DefaultLayout from "@/components/base/DefaultLayout.vue";
import BookingConfirmation from "@/components/booking/BookingConfirmation.vue";
import BookingLayout from "@/components/booking/BookingLayout.vue";

export default {
  name: "BookingConfirmationView",
  components: {BookingLayout, BookingConfirmation, DefaultLayout}
}
</script>

<template>
<booking-layout>
  <BookingConfirmation/>
</booking-layout>
</template>

<style scoped>

</style>
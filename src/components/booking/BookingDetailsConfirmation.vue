<script>

import {useBookingDataStore} from "@/stores/bookingDataStore";
import {BCol} from "bootstrap-vue-3";
import {useBookingStore} from "@/stores/BookingStore";

export default {
  name: "BookingDetailsConfirmation",
  components: {BCol},
  props: {
    isBooked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bookingStore: useBookingStore(),
      bookingDataStore: useBookingDataStore(),
    }
  },
  methods: {
    edit() {
      this.$router.push("/booking");
    },
    bookNow() {
      this.bookingStore.postBooking(this.bookingDataStore.roomId,
          this.bookingDataStore.startDate,
          this.bookingDataStore.endDate,
          this.bookingDataStore.customer.firstName,
          this.bookingDataStore.customer.lastName,
          this.bookingDataStore.customer.email,
          this.bookingDataStore.customer.birthDate)
          .then(bookingId => {
            console.log("Buchung erfolgreich, ID:", bookingId)
            this.bookingDataStore.setBookingId(bookingId);

            this.$emit('success')

          })
          .catch(error => {
            this.$emit('error', error)
          })
    },
  }
};

</script>

<template>
  <div class="mb-5">

    <div align="left" class="mb-4">
      <h4 class="mb-3">Persönliche Daten</h4>

      <b-row class="mb-3">
        <b-col cols="4"><strong>Vorname:</strong></b-col>
        <b-col>{{ bookingDataStore.customer.firstName }}</b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col cols="4"><strong>Nachname:</strong></b-col>
        <b-col>{{ bookingDataStore.customer.lastName }}</b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col cols="4"><strong>Email:</strong></b-col>
        <b-col>{{ bookingDataStore.customer.email }}</b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col cols="4"><strong>Geburtsdatum:</strong></b-col>
        <b-col>{{ new Date(bookingDataStore.customer.birthDate).toLocaleDateString("de-DE") }}</b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col cols="4"><strong>Frühstück:</strong></b-col>
        <b-col>{{ bookingDataStore.breakfast ? "Ja" : "Nein" }}</b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col cols="4"><strong>Zimmer:</strong></b-col>
        <b-col>{{ bookingDataStore.roomId }}</b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col cols="4"><strong>Anreisedatum:</strong></b-col>
        <b-col>{{ new Date(bookingDataStore.startDate).toLocaleDateString("de-DE") }}</b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col cols="4"><strong>Abreisedatum:</strong></b-col>
        <b-col>{{ new Date(bookingDataStore.endDate).toLocaleDateString("de-DE") }}</b-col>
      </b-row>

    </div>
    <div v-if="!isBooked">
      <b-col class="d-flex justify-content-start gap-3 mt-4">
        <b-button class="cta-button" variant="primary" @click="bookNow">
          Buchung abschließen
        </b-button>

        <b-button class="cta-button" variant="secondary" @click="edit">
          Daten bearbeiten
        </b-button>
      </b-col>
    </div>

  </div>
</template>

<style scoped>

.cta-button {
  background-color: #2d4739 !important;
  color: #f5f5dc !important;
  border: none !important;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #6A947D !important;
  color: #f5f5dc !important;
}

</style>
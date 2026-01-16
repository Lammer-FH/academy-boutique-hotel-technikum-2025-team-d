<script>
import BookingDetailsConfirmation from "@/components/booking/BookingDetailsConfirmation.vue";
import BookingForm from "@/components/booking/BookingForm.vue";
import RoomCardComponent from "@/components/room/RoomCardComponent.vue";
import {BRow, BAlert} from "bootstrap-vue-3";
import {useBookingDataStore} from "@/stores/bookingDataStore";
import {useRoomStore} from "@/stores/roomStore";
import ContactComponent from "@/components/booking/ContactComponent.vue";
import DirectionsComponent from "@/components/booking/DirectionsComponent.vue";
import CheckinInfoComponent from "@/components/booking/CheckinInfoComponent.vue";

export default {
  name: "BookingConfirmation",
  components: {
    CheckinInfoComponent,
    DirectionsComponent,
    ContactComponent, BRow, BAlert, RoomCardComponent, BookingForm, BookingDetailsConfirmation
  },
  data() {
    return {
      bookingData: useBookingDataStore(),
      bookingSuccess: false,
      bookingError: null
    }
  },
  created() {
    const bookingData = useBookingDataStore();
    const roomStore = useRoomStore();

    // RoomStore laden, falls noch nicht geschehen
    if (!roomStore.roomsList.length) {
      roomStore.loadState()
    }
  },
  methods: {
    onBookingSuccess() {
      this.bookingSuccess = true
      this.bookingError = null
    },

    onBookingError(error) {
      this.bookingError = error
    }
  },
  computed: {
    roomStore() {
      return useRoomStore();
    },
    room() {
      return this.roomStore.getRoomById(this.bookingData.roomId);
    },
    bookingData() {
      return useBookingDataStore();
    }
  },

}
</script>

<template>

  <div
      v-if="bookingError"
      class="alert alert-danger alert-dismissible fade show mb-4"
      role="alert"
  >
    <strong>Buchung fehlgeschlagen.</strong>
    Bitte versuchen Sie es erneut.

    <button
        type="button"
        class="btn-close"
        @click="bookingError = null"
    ></button>
  </div>

  <div v-if="bookingSuccess" class="alert alert-success mb-4" role="alert">Buchung erfolgreich!</div>

  <h1 v-if="!bookingSuccess" class="h1">Ihre Buchung</h1>
  <h1 v-else class="h1">Buchungsbestätigung</h1>


  <b-row>
    <b-col cols="12" md="6">
      <div align="left" class="mb-4">
        <h2 class="mb-3" v-if="room">{{ room.roomsName }}</h2>
        <p class="mb-2" v-if="bookingSuccess">Buchungsnummer: {{ bookingData.bookingId }}</p>
        <p>Aufenthalt: {{ bookingData.nights }} Nächte</p>
        <p v-if="room">Von {{ new Date(bookingData.startDate).toLocaleDateString("de-De") }} bis
          {{ new Date(bookingData.endDate).toLocaleDateString("de-DE") }}</p>
        <div class="price-box mb-4">
          <span class="price-label">Gesamtpreis</span>
          <span class="price-value">{{ bookingData.totalPrice }} €</span>
        </div>
      </div>
      <BookingDetailsConfirmation
          :is-booked="bookingSuccess"
          @success="onBookingSuccess"
          @error="onBookingError"
      />
    </b-col>
    <b-col cols="12" md="6">
      <RoomCardComponent v-if="room" :room="room" :show-button="false"/>
    </b-col>
  </b-row>
  <!-- Button Buchungshistorie
  <b-button class="cta-button" v-if="bookingSuccess">Zu meinen Buchungen</b-button>
  -->

  <!--Anfahrt und Kontakt-->
  <div v-if="bookingSuccess">
  <DirectionsComponent/>
  <CheckinInfoComponent/>
  <ContactComponent></ContactComponent>
  </div>
</template>

<style scoped>

.h1 {
  padding: 20px;
  color: #2d4739;
}

.price-box {
  background-color: #f8f9fa;
  padding: 12px 16px;
  border-radius: 6px;
  text-align: left;
}

.price-label {
  display: block;
  font-size: 0.9rem;
  color: #6c757d;
}

.price-value {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d4739;
}

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
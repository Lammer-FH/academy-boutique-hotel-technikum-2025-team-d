//hier wird bei Button-Click "Bestätigen und Buchen" BookingStore aufgerufen

<script>
import BookingDetailsConfirmation from "@/components/booking/BookingDetailsConfirmation.vue";
import BookingForm from "@/components/booking/BookingForm.vue";
import RoomCardComponent from "@/components/room/RoomCardComponent.vue";
import {BRow} from "bootstrap-vue-3";
import {useBookingDataStore} from "@/stores/bookingDataStore";
import {useRoomStore} from "@/stores/roomStore";

export default {
  name: "BookingConfirmation",
  components: {BRow, RoomCardComponent, BookingForm, BookingDetailsConfirmation},
  /*
  created() {
    this.roomStore = useRoomStore()
    this.roomStore.loadState();
  },
   */
  watch: {
    totalPrice(newVal) {
      this.bookingData.setTotalPrice(newVal);
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

  <pre>{{ bookingData }}</pre>
  <div>
    <h1 v-if="room">Gewähltes Zimmer: {{ room.roomsName }}</h1>
    <p v-if="room && bookingData.nights > 1">Buchungsdatum:
      {{ new Date(bookingData.startDate).toLocaleDateString("de-De") }} -
      {{ new Date(bookingData.endDate).toLocaleDateString("de-DE") }} / {{ bookingData.nights }} Nächte</p>
    <p v-else>Buchungsdatum: {{ new Date(bookingData.startDate).toLocaleDateString("de-De") }} -
      {{ new Date(bookingData.endDate).toLocaleDateString("de-DE") }} / {{ bookingData.nights }} Nacht</p>
    <p v-if="room">Gesamtpreis: EUR {{ bookingData.totalPrice }}.-</p>
  </div>
  <b-row>
    <b-col cols="12" md="6">
      <BookingDetailsConfirmation/>
    </b-col>
    <b-col cols="12" md="6">
      <RoomCardComponent v-if="room" :room="room" :show-button="false"/>
    </b-col>
  </b-row>


</template>

<style scoped>

</style>
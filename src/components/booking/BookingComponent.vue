<script>
import BookingForm from "@/components/booking/BookingForm.vue";
import {useRoomStore} from "@/stores/roomStore";
import RoomCardComponent from "@/components/room/RoomCardComponent.vue";
import {BRow} from "bootstrap-vue-3";
import {useBookingDataStore} from "@/stores/bookingDataStore";
import BookingDetailsConfirmation from "@/components/booking/BookingDetailsConfirmation.vue";
import RoomListComponent from "@/components/room/RoomListComponent.vue";

export default {
  name: "BookingComponent",
  components: {RoomListComponent, BRow, RoomCardComponent, BookingForm, BookingDetailsConfirmation,},
  data() {
    return {
      //bookingData: useBookingDataStore(),
      showRooms: false,
    }
  },
  created() {
    console.log("Room:", this.roomId);
    console.log("Start:", this.startDate);
    console.log("End:", this.endDate);
    this.roomStore = useRoomStore()
    this.roomStore.loadState();
  },
  methods: {
    editRoomOrDate(){
      this.showRooms = true;
    }
  },
  computed: {
    room() {
      return this.roomStore.getRoomById(this.bookingData.roomId);
    },
    totalPrice() {
      if (!this.room) {
        return 0;
      }
      let total = this.room.pricePerNight * this.bookingData.nights
      this.bookingData.setTotalPrice(total);
    },
    bookingData() {
      return useBookingDataStore();
    },

  }
}

</script>

<template>
  <!--
  <pre>{{ bookingData }}</pre>
  -->
<h1>Ihre Buchung</h1>
  <b-row>
    <b-col cols="12" md="6">
      <div align="left">
        <h2 v-if="room">{{room.roomsName}}</h2>
        <p>Aufenthalt: {{bookingData.nights}} Nächte</p>
        <p v-if="room">Von {{new Date (bookingData.startDate).toLocaleDateString("de-De")}} bis {{new Date(bookingData.endDate).toLocaleDateString("de-DE")}}</p>
        <p v-if="room">Gesamtpreis: EUR {{bookingData.totalPrice}}.-</p>
        <b-button variant="primary" @click="editRoomOrDate">Bearbeiten</b-button>
      </div>
      <BookingForm/>
    </b-col>
    <b-col cols="12" md="6">
      <RoomCardComponent v-if="room" :room="room" :show-button="false"/>
    </b-col>
  </b-row>
  <b-row v-if="showRooms">
    <RoomListComponent/>
  </b-row>

</template>

<style scoped>

</style>
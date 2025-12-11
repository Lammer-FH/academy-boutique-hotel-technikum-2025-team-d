<script>
import BookingForm from "@/components/booking/BookingForm.vue";
import {useRoomStore} from "@/stores/roomStore";
import RoomCardComponent from "@/components/room/RoomCardComponent.vue";
import {BRow} from "bootstrap-vue-3";

export default {
  name: "BookingComponent",
  components: {BRow, RoomCardComponent, BookingForm},
  created() {
    console.log("Room:", this.roomId);
    console.log("Start:", this.startDate);
    console.log("End:", this.endDate);
    this.store = useRoomStore()
    this.store.loadState();
  },
  methods: {
    calculateTotal(){

    }
  },
  computed: {
    roomId() {
      return Number(this.$route.query.roomId);
    },
    startDate() {
      return this.$route.query.startDate;
    },
    endDate() {
      return this.$route.query.endDate;
    },
    room(){
      return this.store.getRoomById(this.roomId)
    },
    nights() {
      if (!this.startDate || !this.endDate) return 0;

      const start = new Date(this.startDate);
      const end = new Date(this.endDate);

      const diff = end - start; // ms
      return diff / (1000 * 60 * 60 * 24); // ms → Tage
    },

    totalPrice() {
      if (!this.room) return 0;
      return this.nights * this.room.pricePerNight;
    }
  },
}
</script>

<template>
  <div>
    <h1 v-if="room">Gewähltes Zimmer: {{room.roomsName}}</h1>
    <p v-if="room && nights > 1">Buchungsdatum: {{startDate}} - {{endDate}} / {{nights}} Nächte</p>
    <p v-else>Buchungsdatum: {{startDate}} - {{endDate}} / {{nights}} Nacht</p>
    <p v-if="room">Gesamtpreis: EUR {{totalPrice}}.-</p>
  </div>
  <b-row>
    <b-col cols="12" md="6">
      <BookingForm/>
    </b-col>
    <b-col cols="12" md="6">
      <RoomCardComponent v-if="room" :room="room" :show-button="false"/>
    </b-col>
  </b-row>

</template>

<style scoped>

</style>
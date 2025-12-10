<script>
import BookingForm from "@/components/booking/BookingForm.vue";
import {useRoomStore} from "@/stores/roomStore";
import RoomCardComponent from "@/components/room/RoomCardComponent.vue";

export default {
  name: "BookingComponent",
  components: {RoomCardComponent, BookingForm},
  created() {
    console.log("Room:", this.roomId);
    console.log("Start:", this.startDate);
    console.log("End:", this.endDate);
    this.store = useRoomStore()
    this.store.loadState();
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
    }
  },
}
</script>

<template>
  <RoomCardComponent v-if="room" :room="room"/>
  <BookingForm/>
</template>

<style scoped>

</style>
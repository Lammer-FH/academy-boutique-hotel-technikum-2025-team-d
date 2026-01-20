<script>
import {useRoomStore} from "@/stores/roomStore";
import RoomCardComponent from "@/components/room/RoomCardComponent.vue";
import CheckDateComponent from "@/components/room/CheckDateComponent.vue";
import {BRow} from "bootstrap-vue-3";

export default {
  name: "RoomListComponent",
  components: {BRow, CheckDateComponent, RoomCardComponent},
  data() {
    return {
      selectedRoomId: null,
    }
  },

  methods: {
    showCheckComponent(roomId) {
      this.selectedRoomId = roomId
    }
  },

  created() {
    useRoomStore().loadState();
  },

  computed: {
    roomsListWithImagesAndDescriptions() {
      return useRoomStore().roomsList
    },

    rows() {
      return this.roomsListWithImagesAndDescriptions.length;
    },

  }

}
</script>

<template>
  <div>

  <p v-if="roomsListWithImagesAndDescriptions.length === 0">Lade Daten...</p>

  <b-row>
    <b-col cols="12" md="6" class="mb-4" v-for="room in roomsListWithImagesAndDescriptions" :key="room.id">
      <RoomCardComponent :room="room" @check="showCheckComponent"></RoomCardComponent>
      <CheckDateComponent v-if="selectedRoomId === room.id" :roomId="room.id"></CheckDateComponent>
    </b-col>
  </b-row>

  </div>

</template>

<style scoped>

</style>
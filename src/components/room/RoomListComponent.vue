//TO DO
//Anzahl Zimmer + Preis
//Daten bereinigen: doppelte Extras im JSON
//Verknüpfung Icon + ExtraName
//Props in:

<script>
import {useRoomStore} from "@/stores/roomStore";
import RoomCardComponent from "@/components/room/RoomCardComponent.vue";
import {roomLocalData} from "@/components/room/roomLocalData";
import {BPagination} from "bootstrap-vue-3";
import CheckDateComponent from "@/components/booking/CheckDateComponent.vue";

export default {
  name: "RoomListComponent",
  components: {CheckDateComponent, BPagination, RoomCardComponent},
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      selectedRoomId: null,
      //isRoomSelected: false,
    }
  },

  methods: {
    onPageChange() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    showCheckComponent(roomId) {
      this.selectedRoomId = roomId
    }
  },

  created() {
    useRoomStore().loadState();
  },

  computed: {
    roomsListWithImagesAndDescriptions() {
      return useRoomStore().roomsList.map((room) => {
        const localData = roomLocalData[room.id] || {};
        return {
          ...room,
          image: localData.image || "/images/roomImages/room1.jpeg",
          description: localData.description || "Keine Beschreibung verfügbar",
        }
      })
    },

    rows() {
      return this.roomsListWithImagesAndDescriptions.length;
    },

    paginatedRooms() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.roomsListWithImagesAndDescriptions.slice(start, end);
    }
  }

}
</script>

<template>

  <p v-if="roomsListWithImagesAndDescriptions.length == 0">Lade Daten...</p>
  <b-list-group>
    <div v-for="room in paginatedRooms" :key="room.id">
      <RoomCardComponent :room="room" :image_src="room.image" :room_description="room.description"
                         @check="showCheckComponent"></RoomCardComponent>
      <CheckDateComponent v-if="selectedRoomId === room.id" :roomId="room.id"></CheckDateComponent>
    </div>
  </b-list-group>

  <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
      @update:modelValue="onPageChange"
  ></b-pagination>


</template>

<style scoped>

</style>
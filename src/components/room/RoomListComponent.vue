<script setup>
import {useRoomStore} from "@/stores/roomStore";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
useRoomStore().loadState();
</script>

<script>
import {useRoomStore} from "@/stores/roomStore";
import RoomCardComponent from "@/components/room/RoomCardComponent.vue";


export default {
  name: "RoomComponent",
  components: {RoomDetailsComponent: RoomCardComponent},
  computed: {
    list() {
      return useRoomStore().list
    }
  }

}
</script>

<template>



  <!-- <p v-if="list.length == 0">Lade Daten ... </p>
  <b-list-group v-else>
    <guest-list-item v-for="guest in list" :key="guest.id" :guest="guest"></guest-list-item>
  </b-list-group> -->
</template>

<style scoped>

</style>
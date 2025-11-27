<script>
import { BCard, BCardBody, BCardImg, BCardText, BCol, BRow } from "bootstrap-vue-3";
import RoomExtraComponent from "@/components/room/RoomExtraComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "RoomCardComponent",
  components: {
    FontAwesomeIcon,
    RoomExtraComponent,
    BCard, BCardBody, BCardImg, BCardText, BCol, BRow
    // ❌ faHouse HIER RAUSNEHMEN!
  },
  data() {
    return {
      faHouse: faHouse  // ✅ Icon hier verfügbar machen
    }
  }
  // ❌ methods mit faHouse() LÖSCHEN!
}
</script>

<template>

  <div>
    <b-card
        title="Kaktus Room"
        img-src="/public/images/roomImages/room1.jpeg"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>

      <b-row>
        <!-- ✅ EINHEITLICHE Syntax für ALLE Components -->
        <RoomExtraComponent
            :room-extra-icon="faHouse"
            room-extra-text="1 Haus"
        />
        <RoomExtraComponent
            :room-extra-icon="faHouse"
            room-extra-text="Kostenloses WLAN"
        />
        <RoomExtraComponent
            :room-extra-icon="faHouse"
            room-extra-text="Flachbild-TV"
        />
        <RoomExtraComponent
            :room-extra-icon="faHouse"
            room-extra-text="Klimaanlage"
        />
        <RoomExtraComponent
            :room-extra-icon="faHouse"
            room-extra-text="Parkplatz"
        />
      </b-row>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<style scoped>
</style>
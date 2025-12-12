<script>
import { BCard, BCardBody, BCardImg, BCardText, BCol, BRow } from "bootstrap-vue-3";
import RoomExtraComponent from "@/components/room/RoomExtraComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "RoomCardComponent",
  props: {
    room: {
      type: Object,
      required: true,
    },
    showButton: {
      type: Boolean,
      default: true
    }
  },
  components: {
    FontAwesomeIcon,
    RoomExtraComponent,
    BCard, BCardBody, BCardImg, BCardText, BCol, BRow
  },
}
</script>

<template>

  <div>
    <b-card
        :title="room.roomsName"
        :img-src="room.image"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2"
    >
      <b-card-text>
        {{room.description}}
      </b-card-text>

      <b-card-text>
        Anzahl der Betten: {{room.beds}}
      </b-card-text>

      <b-card-text>
        <span>Preis pro Nacht: {{room.pricePerNight}} €</span>
      </b-card-text>

      <b-row class="d-flex flex-wrap">
        <b-col>
        <RoomExtraComponent v-for="extra in room.extras" :key="Object.keys(extra)[0]" :extra-name="Object.keys(extra)[0]"
        />
        </b-col>
      </b-row>

      <b-button v-if="showButton" variant="primary" @click="$emit('check', room.id)">
        Verfügbarkeit prüfen
      </b-button>

    </b-card>

  </div>

</template>

<style scoped>
</style>

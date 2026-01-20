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

  <div class="room-card">
    <b-card
        :title="room.roomsName"
        :img-src="room.image"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-4"
    >
      <b-card-text class="text-start mb-3">
        {{room.description}}
      </b-card-text>

      <b-card-text class="text-start mb-3">
        <strong>Anzahl der Betten:</strong> {{room.beds}}
      </b-card-text>

      <div class="price-box mb-4">
        <span class="price-label">Preis pro Nacht</span>
        <span class="price-value">{{ room.pricePerNight }} €</span>
      </div>

      <b-row class="mb-3">
        <b-col>
        <RoomExtraComponent v-for="extra in room.extras" :key="Object.keys(extra)[0]" :extra-name="Object.keys(extra)[0]"
        />
        </b-col>
      </b-row>

      <b-button v-if="showButton" variant="primary" @click="$emit('check', room.id)" class="cta-button">
        Verfügbarkeit prüfen
      </b-button>

    </b-card>

  </div>

</template>

<style scoped>
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

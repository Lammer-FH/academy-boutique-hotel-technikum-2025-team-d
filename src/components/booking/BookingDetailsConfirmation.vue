<script>

import {useBookingDataStore} from "@/stores/bookingDataStore";
import {BCol} from "bootstrap-vue-3";

export default {
  name: "BookingDetailsConfirmation",
  components: {BCol},

  setup() {
    const store = useBookingDataStore();

    return {
      store
    };
  },
  methods: {
    edit(){
      this.$router.push("/booking");
    }
  }
};

</script>

<template>
  <div class="mb-5">

    <div align="left" class="mb-3">
      <h4>Persönliche Daten</h4>

      <b-row class="mb-2">
        <b-col cols="4"><strong>Vorname:</strong></b-col>
        <b-col>{{ store.customer.firstName }}</b-col>
      </b-row>

      <b-row class="mb-2">
        <b-col cols="4"><strong>Nachname:</strong></b-col>
        <b-col>{{ store.customer.lastName }}</b-col>
      </b-row>

      <b-row class="mb-2">
        <b-col cols="4"><strong>Email:</strong></b-col>
        <b-col>{{ store.customer.email }}</b-col>
      </b-row>

      <b-row class="mb-2">
        <b-col cols="4"><strong>Geburtsdatum:</strong></b-col>
        <b-col>{{ new Date(store.customer.birthDate).toLocaleDateString("de-DE") }}</b-col>
      </b-row>

      <b-row class="mb-2">
        <b-col cols="4"><strong>Frühstück:</strong></b-col>
        <b-col>{{ store.breakfast ? "Ja" : "Nein"}}</b-col>
      </b-row>

      <b-row class="mb-2">
        <b-col cols="4"><strong>Zimmer:</strong></b-col>
        <b-col>{{ store.roomId }}</b-col>
      </b-row>

      <b-row class="mb-2">
        <b-col cols="4"><strong>Anreisedatum:</strong></b-col>
        <b-col>{{ new Date(store.startDate).toLocaleDateString("de-DE") }}</b-col>
      </b-row>

      <b-row class="mb-2">
        <b-col cols="4"><strong>Abreisedatum:</strong></b-col>
        <b-col>{{ new Date(store.endDate).toLocaleDateString("de-DE")  }}</b-col>
      </b-row>

    </div>

    <b-button variant="secondary" @click="edit">
      Eingaben bearbeiten
    </b-button>


  </div>
</template>

<style scoped>

</style>
//TO DO und aktueller Stand
//Recherchieren: Wie funktioniert Router mit Parametern und wo/wie holt man sich die Parameter in der Komponente aus der URL (roomId)
//Validierungen
//Check: in welchem Format kommend die Daten aus dem Datepicker zurück? Wie transformieren?
//Verfügbarkeit prüfen ev unter RoomCard und nicht als eigene Seite? erst Buchung eigene Seite?

<script>
import {BContainer} from "bootstrap-vue-3";
import {useAvailabilityStore} from "@/stores/availabilityStore";

export default {
  name: "CheckDateComponent",
  components: {BContainer},
  props: {
    roomId: Number,
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      datesValid: null,
      //ev errors[] wenn wir unterschiedliche Fehlermeldungen ausgeben wollen
    }
  },
  created() {
    //Instanzierung des Stores beim Laden er Komponente
    this.store = useAvailabilityStore();
  },


  methods: {
    //muss augelöst werden -> Button
    checkAvailability() {
      this.validateInputs();
      if (this.datesValid) {
        this.store.loadState(this.roomId, this.startDate, this.endDate)
      }

    },
    validateInputs() {
      if (!this.startDate || !this.endDate) {
        this.datesValid = false;
        return;
      }

      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (startDate < today || endDate < startDate) {
        this.datesValid = false;
        return;
      }

      this.datesValid = true;
    },
  },

  computed: {
//wenn sich state im store ändert wird isAvailable() automatisch ausgeführt und GUI neu gezeichnet
    isAvailable() {
      return this.store.isAvailable;
    }
  }
}


</script>

<template>
  <div>
    <b-container class="mt-120 mb-5 bg-color">
      <b-row>
        <b-col cols="12" md="6">
          <label for="startDate" class="form-label">Anreise</label>
          <!-- gibt String im Format YYYY-MM-DD zurück-->
          <b-form-input
              id="startDate"
              type="date"
              v-model="startDate"
              class="mb-3"
          />
        </b-col>

        <b-col cols="12" md="6">
          <label for="endDate" class="form-label">Abreise</label>
          <b-form-input
              id="endDate"
              type="date"
              v-model="endDate"
              class="mb-3"
          />
        </b-col>
      </b-row>
      <b-button variant="primary" @click="checkAvailability">Reisedaten bestätigen</b-button>
      <div v-if="isAvailable !== null">
        <div v-if="isAvailable">
          <p>Zimmer verfügbar</p>
          <b-button>Jetzt buchen</b-button>
        </div>
        <div v-else>
          <p>Leider nicht verfügbar</p>
        </div>
      </div>
    </b-container>
  </div>

</template>x

<style scoped>
.bg-color {
  background-color: lightgray;
  padding: 20px;
}
</style>
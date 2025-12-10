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
    this.datesValid = null;
    this.startDate = null;
    this.endDate = null;
    this.store = useAvailabilityStore();

  },

  watch: {
    startDate() {
      this.resetUI();
    },
    endDate() {
      this.resetUI();
    }
  },

  methods: {
    //muss augelöst werden -> Button
    checkAvailability() {
      //this.datesValid = null;
      this.validateInputs();
      if (this.datesValid) {
        this.store.loadState(this.roomId, this.startDate, this.endDate)
      }
    },

    validateInputs() {
      this.datesValid = null;
      if (!this.startDate || !this.endDate) {
        this.datesValid = false;
        return;
      }

      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (startDate < today || endDate <= startDate) {
        this.datesValid = false;
        return;
      }

      this.datesValid = true;
    },

    resetUI() {
      this.store.reset();     // Verfügbarkeit zurücksetzen
      this.datesValid = null; // Validierung zurücksetzen
    }
  },

  computed: {
//wenn sich state im store ändert wird isAvailable() automatisch ausgeführt und GUI neu gezeichnet
    isAvailable() {
      return this.store.availability[this.roomId] ?? null
    },
  }
}


</script>

<template>
  <div>
    <b-container class="mt-120 mb-5 bg-color rounded">
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
      <div v-if="datesValid != null && !datesValid">
        <p class="errorText">Bitte gültige Daten eingeben</p>
      </div>
      <div v-if="isAvailable !== null && startDate !== null && endDate !== null">
        <div v-if="isAvailable">
          <p>Zimmer verfügbar</p>
        </div>
        <div v-else>
          <p class="errorText">Das Zimmer ist im gewählten Zeitraum leider nicht verfügbar</p>
        </div>
      </div>
      <b-button variant="primary" v-if="isAvailable == null || !isAvailable || !datesValid" @click="checkAvailability">
        Reisedaten bestätigen
      </b-button>
      <b-button variant="success" v-else>
        <RouterLink :to="{name: 'booking',
query: {
        roomId: roomId,
        startDate: startDate,
        endDate: endDate}
}">Jetzt buchen
        </RouterLink>
      </b-button>

    </b-container>
  </div>

</template>x

<style scoped>
.bg-color {
  background-color: lightgray;
  padding: 20px;
}

.errorText {
  color: red;
}


</style>
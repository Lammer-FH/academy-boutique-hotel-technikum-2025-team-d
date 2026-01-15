<script>
import {BRow, BCol} from "bootstrap-vue-3";
export default {
  name: "CheckinInfoComponent",
  components: {BRow, BCol}
}
</script>

<template>
  <b-container class="my-5">
    <b-row>
      <b-col cols="12">
        <h2 class="section-title mb-4">Check-in Informationen</h2>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" md="6" class="mb-4">
        <div class="info-section">
          <h4 class="section-heading">Anreise</h4>
          <div class="info-item">
            <strong>Check-in:</strong> 24 Stunden täglich möglich
          </div>
          <div class="info-item">
            <strong>Check-out:</strong> bis 11:00 Uhr
          </div>
          <p class="mt-3">
            Bitte halten Sie bei Ihrer Ankunft einen gültigen Lichtbildausweis
            sowie Ihre Buchungsbestätigung bereit.
          </p>
        </div>
      </b-col>

      <b-col cols="12" md="6" class="mb-4">
        <div class="info-section">
          <h4 class="section-heading">24-Stunden Check-in</h4>
          <p>
            Egal zu welcher Uhrzeit Sie anreisen – wir sind für Sie da!
            Unser Personal steht Ihnen rund um die Uhr zur Verfügung.
          </p>
          <p class="mb-0">
            Bei Anreise außerhalb der regulären Rezeptionszeiten
            (07:00 - 22:00 Uhr) nutzen Sie bitte die Nachtklingel am Eingang.
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" md="6" class="mb-4">
        <div class="info-section">
          <h4 class="section-heading">Frühe Anreise</h4>
          <p class="mb-0">
            Sollten Sie vor 15:00 Uhr anreisen und Ihr Zimmer noch nicht
            bezugsbereit sein, können Sie Ihr Gepäck gerne an unserer Rezeption
            deponieren und bereits die Annehmlichkeiten unseres Hotels genießen.
          </p>
        </div>
      </b-col>

      <b-col cols="12" md="6" class="mb-4">
        <div class="info-section">
          <h4 class="section-heading">Später Check-out</h4>
          <p class="mb-0">
            Ein später Check-out ist nach Verfügbarkeit gegen Aufpreis möglich.
            Bitte kontaktieren Sie uns im Voraus.
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12">
        <div class="info-section highlight">
          <h4 class="section-heading">Parkmöglichkeiten</h4>
          <p class="mb-0">
            Begrenzte Parkplätze stehen Ihnen direkt vor dem Hotel zur Verfügung.
            Alternativ finden Sie öffentliche Parkplätze in unmittelbarer Nähe.
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.section-title {
  color: #2d4739;
  font-weight: 600;
  text-align: left;
}

.info-section {
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
}

.section-heading {
  color: #2d4739;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.info-item {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.info-item strong {
  color: #2d4739;
}

p {
  color: #666;
  line-height: 1.6;
}

b-container {
  text-align: left;
}
</style>
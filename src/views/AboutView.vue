<script setup>
import DefaultLayout from "@/components/base/DefaultLayout.vue";
import { BContainer, BRow, BCol, BCard } from "bootstrap-vue-3";
</script>

<template>
  <DefaultLayout>
    <section class="about-section py-5">

            <div class="text-center mb-5">
              <h1 class="display-5 fw-bold text-uppercase text-title">Über Uns</h1>
              <p class="lead text-muted">Wer wir sind und was uns ausmacht</p>
            </div>

            <!-- Haupttext -->
            <b-card class="p-4 mb-4 about-card shadow-sm">
              <p class="mb-4">
                Das Boutique Hotel Technikum ist weit mehr als ein Ort zum Übernachten – es ist ein Zuhause auf Zeit
                für Reisende, die das Besondere suchen. Gegründet mit der Vision, moderne Ästhetik mit Wiener Charme
                zu verbinden, vereinen wir stilvolles Interieur mit herzlicher Gastfreundschaft. Unsere Lage im
                pulsierenden 20. Bezirk bietet den perfekten Ausgangspunkt für Entdeckungen in der Innenstadt, ohne
                den Trubel direkt vor der Tür zu haben.
              </p>

              <p class="mb-4">
                Mit viel Liebe zum Detail haben wir jedes unserer Zimmer individuell gestaltet – jedes ein kleines
                Refugium, das zum Entspannen einlädt. Hochwertige Materialien, sorgfältig ausgewählte Farben und eine
                ruhige Atmosphäre sorgen dafür, dass Sie sich vom ersten Moment an willkommen fühlen.
              </p>

              <p class="mb-4">
                Unser Team steht Ihnen mit Leidenschaft und Hingabe zur Seite – sei es bei Restaurantempfehlungen,
                kulturellen Tipps oder besonderen Wünschen. Wir glauben daran, dass Service persönlich sein darf –
                diskret, aber aufmerksam. Ihre Zufriedenheit ist unser größter Antrieb.
              </p>

              <p class="mb-0">
                Nachhaltigkeit und Regionalität sind für uns keine Schlagworte, sondern gelebte Philosophie. Vom
                Frühstück mit lokalen Produkten bis zur umweltfreundlichen Zimmerreinigung – wir möchten nicht nur
                komfortabel, sondern auch verantwortungsvoll Gastgeber sein.
              </p>
            </b-card>

            <!-- Zitat / Motto -->
            <div class="text-center mt-5 fst-italic text-quote">
              „Bei uns sind Sie nicht nur Gast – Sie sind Teil einer Geschichte, die mit jeder Übernachtung wächst.“
            </div>

    </section>
  </DefaultLayout>
</template>

<style scoped>
.about-section {
  background-color: #f7f6f0;
  color: #2d4739;
  min-height: calc(100vh - 200px);
}

.text-title {
  color: #2d4739;
  letter-spacing: 1px;
}

.about-card {
  background-color: #ffffff;
  border: none;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2d4739;
}

.text-quote {
  color: #d4af37;
  font-size: 1.1rem;
}
</style>

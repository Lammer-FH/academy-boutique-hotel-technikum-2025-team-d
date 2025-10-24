<script>
import DefaultLayout from "@/components/DefaultLayout.vue";
import Carousel from "@/components/Carousel.vue";
import { BButton } from "bootstrap-vue-3";
import CarouselV2 from "@/components/CarouselV2.vue";


export default {
  components: {CarouselV2, BButton, DefaultLayout, Carousel },
  data() {
    return {
      carouselPictures: [
        'https://picsum.photos/1024/480?random=1',
        'https://picsum.photos/1024/480?random=2',
        'https://picsum.photos/1024/480?random=3',
      ],
    };

  },
  mounted() {
    console.log('✅ Bilder im Parent:', this.carouselPictures)
  }
};
</script>

<template>
  <DefaultLayout>
    <section class="home-hero py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8 mx-auto text-center">

            <!-- Headline -->
            <h1 class="display-4 fw-bold mb-4  text-hero">
              Boutique Hotel Technikum
            </h1>

            <!-- Hero Image -->
            <img
                src="https://picsum.photos/1024/480"
                class="img-fluid rounded shadow mb-5 hero-img"
                alt="Hotelbild"
            />

            <!-- Intro Text -->
            <p class="lead mb-5 text-intro text-justified">
              <strong>Willkommen im Boutique Hotel Technikum!</strong><br>
              Erleben Sie modernen Komfort im Herzen Wiens. Unser charmantes Boutique-Hotel verbindet
              zeitgenössisches Design mit herzlicher österreichischer Gastfreundschaft.
              <br>
              Ob Geschäftsreise oder Städtetrip – bei uns finden Sie Ihren perfekten Rückzugsort in der pulsierenden Stadt.
            </p>

            <p class="lead mb-5 text-intro text-justified">
              <strong>Ihr Zuhause in Wien:</strong><br>
              Das Boutique Hotel Technikum liegt im aufstrebenden 20. Bezirk, nur wenige Minuten von der Innenstadt entfernt.
              In unseren stilvoll eingerichteten Zimmern erwarten Sie modernste Annehmlichkeiten, bequeme Betten und ein
              Service, der keine Wünsche offen lässt. Unser Team steht Ihnen rund um die Uhr zur Verfügung, um Ihren Aufenthalt
              unvergesslich zu machen.
            </p>

            <p class="lead mb-5 text-intro text-justified">
              <strong>Bereit für Ihr Wien-Erlebnis?</strong><br>
              Buchen Sie jetzt Ihr Zimmer und sichern Sie sich die besten Raten.
              <br>Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen!
            </p>

            <!-- Carousel -->
            <div class="mb-5">
              <CarouselV2 :pictures="carouselPictures" />
            </div>

            <!-- CTA Button -->
            <b-button variant="light" size="lg" class="cta-button px-4 py-2">
              Jetzt Zimmer ansehen
            </b-button>

          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>
/* Hintergrund leicht beige/grünlich */
.home-hero {
  background-color: #f7f6f0;
  color: #2d4739;
}

/* Headline */
.text-hero {
  letter-spacing: 1px;
  color: #2d4739;
}

/* Einleitungstext */
.text-intro {
  max-width: 720px;
  margin: 0 auto;
  font-size: 1.15rem;
  color: #3d4d3f;
}

/* Bild */
.hero-img {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* CTA-Button */
.cta-button {
  background-color: #2d4739 !important;
  color: #f5f5dc !important;
  border: none !important;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #d4af37 !important;
  color: #2d4739 !important;
}

.text-justified {
  text-align: justify;
}
</style>

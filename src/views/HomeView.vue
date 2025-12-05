<script>
import DefaultLayout from "@/components/base/DefaultLayout.vue";
import {BButton} from "bootstrap-vue-3";
import CarouselV2 from "@/components/base/CarouselV2.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";


export default {
  methods: {
    faHouse() {
      return faHouse
    }
  },
  components: {FontAwesomeIcon, CarouselV2, BButton, DefaultLayout},
  data() {
    return {
      carouselPictures: [
        '/images/Boutique-Hotel-Rooms/Boutique-Hotel-Rooms-1.jpg',
        '/images/Boutique-Hotel-Rooms/Boutique-Hotel-Rooms-2.jpg',
        '/images/Boutique-Hotel-Rooms/Boutique-Hotel-Rooms-3.jpg',
      ],
    };

  },
  mounted() {
    console.log('Bilder im Parent:', this.carouselPictures)
  }
};

</script>

<template>
  <DefaultLayout>


          <h1 class="display-4 fw-bold mb-4 text-hero">
            Boutique Hotel Technikum
          </h1>

          <b-img
              src='/images/Hotel/HotelAußen.jpg'
              fluid
              rounded
              class="shadow mb-5 hero-img"
              alt="Hotelbild"
          />


          <p class="lead mb-5 text-intro text-justified">
            <strong>Willkommen im Boutique Hotel Technikum!</strong><br>
            Erleben Sie modernen Komfort im Herzen Wiens. Unser charmantes Boutique-Hotel verbindet
            zeitgenössisches Design mit herzlicher österreichischer Gastfreundschaft.
            <br>
            Ob Geschäftsreise oder Städtetrip – bei uns finden Sie Ihren perfekten Rückzugsort in der pulsierenden
            Stadt.
          </p>

          <p class="lead mb-5 text-intro text-justified">
            <strong>Ihr Zuhause in Wien:</strong><br>
            Das Boutique Hotel Technikum liegt im aufstrebenden 20. Bezirk, nur wenige Minuten von der Innenstadt
            entfernt.
            In unseren stilvoll eingerichteten Zimmern erwarten Sie modernste Annehmlichkeiten, bequeme Betten und ein
            Service, der keine Wünsche offen lässt. Unser Team steht Ihnen rund um die Uhr zur Verfügung, um Ihren
            Aufenthalt
            unvergesslich zu machen.
          </p>

          <p class="lead mb-5 text-intro text-justified">
            <strong>Bereit für Ihr Wien-Erlebnis?</strong><br>
            Buchen Sie jetzt Ihr Zimmer und sichern Sie sich die besten Raten.
            <br>Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen!
          </p>


          <h2 class="display-6 fw-bold mb-4 text-hero">
            Unsere Zimmer:
          </h2>


          <b-container class="mb-5">
            <CarouselV2 :pictures="carouselPictures"/>
          </b-container>


          <b-button href="#" variant="light" size="lg" class="cta-button px-4 py-2">
            <router-link  to="/rooms" class="nav-link-custom">Jetzt Zimmer ansehen</router-link>
          </b-button>



  </DefaultLayout>
</template>

<style scoped>
/* Hintergrundfarbe und Textfarbe für die Hero-Section */
.home-hero {
  background-color: #f7f6f0;
  color: #2d4739;
}

/* Headline-Styling */
.text-hero {
  letter-spacing: 1px;
  color: #2d4739;
}

/* Intro-Text */
.text-intro {
  max-width: 720px;
  margin: 0 auto;
  font-size: 1.15rem;
  color: #3d4d3f;
}

/* Box-Shadow für das Hero-Bild */
.hero-img {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* CTA-Button individuell stylen */
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

/* Text Blocksatz */
.text-justified {
  text-align: justify;
}
</style>
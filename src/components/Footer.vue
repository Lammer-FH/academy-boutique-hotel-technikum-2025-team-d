<script>
import { BContainer, BRow, BCol, BLink } from "bootstrap-vue-3";

export default {
  components: { BContainer, BRow, BCol, BLink },
  data() {
    return {
      currentYear: "2025"
    };
  }
};
</script>

<template>
  <footer class="footer-custom text-light pt-5 pb-3">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" sm order-sm="3" class="text-center text-sm-right">
          <b-link to="/" class="d-inline-block mx-auto"></b-link>
        </b-col>

        <b-col cols="auto" md="4" class="text-left mb-4 mb-md-0">
          <h5 class="footer-heading">Wichtige Links</h5>
          <ul class="list-unstyled ms-2">
            <li href="#">
              <router-link to="/about" class="footer-link">Über Uns</router-link>
            </li>
            <li href="#">
              <router-link  to="/impressum" class="footer-link">Impressum</router-link>
            </li>
          </ul>
        </b-col>

        <b-col cols="auto" class="text-left">
          <h5 class="footer-heading mb-3">Boutique Hotel Technikum</h5>
          <p class="mb-2">
            <strong>Adresse:</strong><br />
            Höchstädtplatz 6<br />
            1200 Wien, Österreich
          </p>
          <p class="mb-2">
            <strong>Telefon:</strong><br />
            +43 1 333 40 77
          </p>
          <p class="mb-0">
            <strong>Email:</strong><br />
            <a href="mailto:info@hotel-technikum.at" class="footer-link">
              info@hotel-technikum.at
            </a>
          </p>
        </b-col>
      </b-row>

      <b-row class="pt-4 mt-4 border-top border-secondary">
        <b-col class="text-center">
          <p class="mb-0 small">
            ©️{{ currentYear }} Boutique Hotel Technikum. Alle Rechte vorbehalten.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<style scoped>
/* Hintergrund & Textfarbe passend zum Header */
.footer-custom {
  background-color: #2d4739;
  color: #f5f5dc;
}

/* Überschriften */
.footer-heading {
  color: #f5f5dc;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

/* Links */
.footer-link {
  color: #f5f5dc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #d4af37; /* dezentes Gold beim Hover */
  text-decoration: none;
}

/* Kleinere Devices */
@media (max-width: 767px) {
  .footer-heading {
    text-align: center;
  }
}
</style>

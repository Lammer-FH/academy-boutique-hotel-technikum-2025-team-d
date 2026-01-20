<script>
import {BRow, BCol} from "bootstrap-vue-3";
export default {
  name: "ContactComponent",
  components: {BRow, BCol}
}
</script>

<template>
  <b-container class="contact-container">
    <b-row>
      <b-col cols="12">
        <h2 class="page-title">Kontakt</h2>
        <p class="contact-intro">
          Bei sonstigen Fragen oder Anliegen erreichen Sie uns unter:
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" md="6" class="mb-4">
        <div class="contact-item">
          <strong>Telefon:</strong><br />
          <a href="tel:+4313334077" class="contact-link">+43 1 333 40 77</a>
        </div>
      </b-col>

      <b-col cols="12" md="6" class="mb-4">
        <div class="contact-item">
          <strong>Email:</strong><br />
          <a href="mailto:info@hotel-technikum.at" class="contact-link">
            info@hotel-technikum.at
          </a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.contact-container {
  padding: 3rem 1rem;
  max-width: 1200px;
}

.page-title {
  color: #2d4739;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
}

.contact-intro {
  margin-bottom: 1.5rem;
  color: #666;
  line-height: 1.8;
  text-align: left;
}

.contact-item {
  line-height: 1.8;
  text-align: left;
}

.contact-item strong {
  color: #2d4739;
  font-weight: 600;
}

.contact-link {
  color: #2d4739;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #6A947D;
  text-decoration: underline;
}

@media (max-width: 767px) {
  .contact-container {
    padding: 2rem 1rem;
  }
}
</style>
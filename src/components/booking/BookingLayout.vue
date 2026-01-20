<script setup>
import Footer from '@/components/Footer.vue'
import NavBar from "@/components/NavBar.vue";
import {BContainer} from "bootstrap-vue-3";
</script>

<template>
  <div id="layout" class="d-flex flex-column min-vh-100">
    <!-- Navbar oben -->
    <NavBar />

    <!-- Hauptinhalt -->
    <main class="flex-fill mt-50">
      <b-container class="home-hero py-5">
        <b-row>
          <b-col cols="12" lg="10" class="mx-auto text-center">
            <slot/>
          </b-col>
        </b-row>
      </b-container>
    </main>

    <!-- Footer unten -->
    <Footer />
  </div>
</template>

<style scoped>

.mt-50 {
  margin-top: 50px !important;
}

</style>
<script setup>
import Footer from '@/components/Footer.vue'
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div id="layout" class="d-flex flex-column min-vh-100">
    <!-- Navbar oben -->
    <NavBar />

    <!-- Hauptinhalt -->
    <main class="flex-fill">
      <slot/>
    </main>

    <!-- Footer unten -->
    <Footer />
  </div>
</template>

<style scoped>
main {
  padding-top: 70px; /* Platz, falls Navbar fixed ist */
}
</style>
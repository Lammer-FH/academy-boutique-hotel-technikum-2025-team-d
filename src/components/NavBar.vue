<script setup>
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BButton
} from 'bootstrap-vue-3'
</script>

<template>
  <div>
    <b-navbar toggleable="lg" class="navbar-custom fixed-top">
      <b-navbar-brand>
        <router-link to="/" class="nav-link-custom">Boutique Hotel Technikum</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-link href="#">
            <router-link  to="/about" class="nav-link-custom">Über Uns</router-link>
          </b-link>
        </b-navbar-nav>

        <b-navbar-nav class="ms-auto">
          <b-button class="login-btn">Login</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
/* Dunkelgrün + Beige */
.navbar-custom {
  background-color: #2d4739 !important;
  color: #f5f5dc !important;
}

/* NavLink-Styling (für router-link) */
.nav-link-custom {
  color: #f5f5dc !important;
  text-decoration: none !important;
  font-weight: 500;
  padding: 0.5rem 1rem;
  display: inline-block;
  transition: color 0.3s ease;
}

.nav-link-custom:hover {
  color: #d4af37 !important;
  text-decoration: none;
}

/* Brand */
.navbar-custom .navbar-brand {
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
}

/* Login-Button */
.login-btn {
  color: #2d4739 !important;
  background-color: #f5f5dc !important;
  border: none !important;
  font-weight: 500;
}

.login-btn:hover {
  background-color: #d4af37 !important;
  color: #2d4739 !important;
}
</style>

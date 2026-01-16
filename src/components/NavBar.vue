<script>
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BButton,
  BNavItem,
  BNavText,
  BAlert
} from 'bootstrap-vue-3';
import {useUserStore} from "@/stores/userStore";

export default {
  name: "NavBar",
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BButton,
    BNavItem,
    BNavText,
    BAlert
  },

  data() {
    return {
      userData: useUserStore(),
      showLogoutSuccess: false
    }
  },

  computed: {
    isLoggedIn() {
      return this.userData.isLoggedIn
    },

    userGreeting() {
      return this.userData.displayName
    }
  },

  methods: {
    logout() {
      this.userData.logout()
      this.showLogoutSuccess = true

      setTimeout(() => {
        this.showLogoutSuccess = false
      }, 3000)
    }
  }
}

</script>

<template>

  <div>

    <b-alert
        v-model="showLogoutSuccess"
        variant="success"
        dismissible: true
        class="logout-alert">
      Erfolgreich ausgeloggt!
    </b-alert>

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

          <router-link
              v-if="!isLoggedIn"
              to="/login"
              class="login-logout-btn btn">
            Login
          </router-link>

            <div v-else class="d-flex align-items-center">
            <span class="user-greeting">
              Hallo, {{userGreeting}}
            </span>
              <b-button @click="logout" class="login-logout-btn">
                Logout
              </b-button>
            </div>

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


.user-greeting {
  color: #f5f5dc !important;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.login-logout-btn {
  color: #2d4739 !important;
  background-color: #f5f5dc !important;
  border: none !important;
  font-weight: 500;
  margin-left: 0.5rem;
}

.login-logout-btn:hover {
  background-color: #d4af37 !important;
  color: #2d4739 !important;
}

.logout-alert {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 9999;
  min-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

</style>

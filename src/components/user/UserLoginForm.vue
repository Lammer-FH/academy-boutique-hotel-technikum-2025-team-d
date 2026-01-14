<script>
import {useUserStore} from "@/stores/userStore";
import {BForm} from "bootstrap-vue-3";
export default {
  name: "UserLoginForm",
  components: {BForm},
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true,
      userData: useUserStore(),
      showLoginSuccess: false
    }
  },
  computed: {
    isLoggedIn() {
      return this.userData.isLoggedIn
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      try {
        await this.userData.postLogin(this.form.email, this.form.password)
        this.showLoginSuccess = true
        setTimeout(() => {
          this.showLoginSuccess = false
          this.$router.go(-1)
        }, 3000)
      } catch (error) {
        alert("Login fehlgeschlagen. Bitte versuchen Sie es erneut")
        console.error(error)
      }
    }
  }
}
</script>
<template>
  <div class="pt-4 pb-5">
    <b-alert
        v-model="showLoginSuccess"
        variant="success"
        dismissible = true
        class="login-alert">
      Login erfolgreich! Sie werden weitergeleitet...
    </b-alert>
    <h2 align="left" >Login</h2>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-2" label="Email Adresse:" label-for="input-2"
                    align="left">
        <b-form-input
            id="input-2"
            v-model="form.email"
            placeholder="Email Adresse eingeben"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group
          id="input-group-1"
          label="Passwort:"
          label-for="input-1"
          align="left"
      >
        <b-form-input
            id="input-1"
            v-model="form.password"
            type="password"
            placeholder="Gewünschtes Passwort eingeben"
            required
        ></b-form-input>
      </b-form-group>
      <b-button v-if="!isLoggedIn" class="cta-button" type="submit" variant="primary">Jetzt Anmelden</b-button>
      <b-button disabled v-if="isLoggedIn" class="cta-button"  variant="primary">Jetzt Anmelden</b-button>
      <p v-if="!isLoggedIn">Sie haben noch keinen Account? <router-link to="/registration">
        Jetzt Registrieren!
      </router-link></p>
    </b-form>
  </div>
</template>
<style scoped>
.cta-button {
  background-color:
      #2d4739 !important;
  color:
      #f5f5dc !important;
  border: none !important;
  transition: all 0.3s ease;
}
.cta-button:hover {
  background-color:
      #6A947D !important;
  color:
      #f5f5dc !important;
}
.login-alert {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 9999;
  min-width: 350px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
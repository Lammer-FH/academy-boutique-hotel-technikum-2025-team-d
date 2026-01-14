<script>

import {BForm} from "bootstrap-vue-3";
import {useUserStore} from "@/stores/userStore";

export default {
  name: "UserRegistrationComponent",
  components: {BForm},

  data() {
    return {
      form: {
        email: '',
        confirmemail: '',
        firstname: '',
        lastname: '',
        password: '',
        confirmpassword: '',
        username: '',
      },
      show: true,
      userData: useUserStore()
    }
  },

  methods: {

    saveDataOnReload(key, value) {
      localStorage.setItem(key, value);
      this.form[key] = value;
    },

    updateUserDataStore(){
      this.userData.setFirstName(this.form.firstname);
      this.userData.setLastName(this.form.lastname);
      this.userData.setPassword(this.form.password);
      this.userData.setUsername(this.form.username);
      this.userData.setEmail(this.form.email)


    },

    validateEmails() {
      return this.form.email === this.form.confirmemail;
    },

    validatePassword(){
      return this.form.password === this.form.confirmpassword;
    },

    onSubmit(){
      if (!this.validateEmails()) {
        alert("Die Email Adressen stimmen nicht überein.");
        return;
      }

      if (!this.validatePassword()){
        alert("Die Passwörter stimmen nicht überein")
        return;
      }

      //this.updateUserDataStore()
      this.userData.postRegistration(this.form.firstname, this.form.lastname, this.form.email, this.form.username, this.form.password)
      console.log(this.userData)
    }
  }
}
</script>

<template>
  <div class="pt-4 pb-5">
    <h2 align="left">Registrierung</h2>
    <b-form @submit="onSubmit">

      <b-form-group id="input-group-2" label="Vorname:" label-for="input-2"
                    align="left">
        <b-form-input
            id="input-2"
            v-model="form.firstname"
            placeholder="Geben Sie bitte Ihren Vornamen ein"
            required
            @input="saveDataOnReload('firstname', form.firstname)"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nachname:" label-for="input-2"
                    align="left">
        <b-form-input
            id="input-2"
            v-model="form.lastname"
            placeholder="Geben Sie bitte Ihren Nachnamen ein"
            required
            @input="saveDataOnReload('lastname', form.lastname)"
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Email Adresse:"
          label-for="input-1"
          align="left"
      >
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Email Adresse eingeben"
            required
            @input="saveDataOnReload('email', form.email)"
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Email Adresse bestätigen:"
          label-for="input-1"
          align="left"
      >
        <b-form-input
            id="input-1"
            v-model="form.confirmemail"
            type="email"
            placeholder="Email Adresse bestätigen"
            required
            @input="saveDataOnReload('confirmemail', form.confirmemail)"
        ></b-form-input>
        <div v-if="validateEmails() === false && form.confirmemail !== ''" class="text-danger mt-2">
          Die Email Adressen stimmen nicht überein.
        </div>
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

      <b-form-group
          id="input-group-1"
          label="Passwort bestätigen:"
          label-for="input-1"
          align="left"
      >
        <b-form-input
            id="input-1"
            v-model="form.confirmpassword"
            type="password"
            placeholder="Gewünschtes Passwort bestätigen"
            required
        ></b-form-input>
        <div v-if="validatePassword() === false && form.confirmpassword !== ''" class="text-danger mt-2">
          Die Passwörter stimmen nicht überein.
        </div>
      </b-form-group>

      <b-button class="cta-button" type="submit" variant="primary">Jetzt Konto erstellen</b-button>
    </b-form>
  </div>
</template>

<style scoped>

.cta-button {
  background-color: #2d4739 !important;
  color: #f5f5dc !important;
  border: none !important;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #6A947D !important;
  color: #f5f5dc !important;
}

</style>

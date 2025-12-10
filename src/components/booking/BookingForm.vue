<script>
import {
  BButton,
  BCard,
  BForm,
  BFormCheckbox,
  BFormCheckboxGroup,
  BFormGroup,
  BFormInput, BFormRadio,
  BFormSelect,
} from "bootstrap-vue-3";

export default {
  name: "BookingForm",
  components: {BFormRadio, BCard, BButton, BFormCheckbox, BFormCheckboxGroup, BFormSelect, BForm, BFormInput, BFormGroup},
  data() {
    return {
      form: {
        email: '',
        confirmemail: '',
        firstname: '',
        lastname: '',
        birthdate: '',
        breakfast: ''
      },
      show: true
    }
  },
  methods: {

    validateBirthdate(dateString) {
      const today = new Date();
      const birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();

      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age >= 18;
    },

    validateEmails() {
      return this.form.email === this.form.confirmemail;
    },

    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
  }

}
</script>

<template>
  <div class="mb-5">
    <b-form @submit="onSubmit" v-if="show">

      <b-form-group id="input-group-2" label="Vorname:" label-for="input-2" label-cols="3"
                    align="left">
        <b-form-input
            id="input-2"
            v-model="form.firstname"
            placeholder="Geben Sie bitte Ihren Vornamen ein"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nachname:" label-for="input-2" label-cols="3"
                    align="left">
        <b-form-input
            id="input-2"
            v-model="form.lastname"
            placeholder="Geben Sie bitte Ihren Nachnamen ein"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Email Addresse:"
          label-for="input-1"
          label-cols="3"
          align="left"
      >
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Email Adresse eingeben"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Email Addresse bestätigen:"
          label-for="input-1"
          label-cols="3"
          align="left"
      >
        <b-form-input
            id="input-1"
            v-model="form.confirmemail"
            type="email"
            placeholder="Email Adresse bestätigen"
            required
        ></b-form-input>
        <div v-if="validateEmails() === false && form.confirmemail !== ''" class="text-danger mt-2">
          Die Email Adressen stimmen nicht überein.
        </div>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Geburtsdatum:"
          label-for="input-1"
          label-cols="3"
          align="left"
      >
        <b-form-input
            id="input-1"
            v-model="form.birthdate"
            type="date"
            placeholder="Geburtsdatum eingeben"
            required
        ></b-form-input>
        <div v-if="validateBirthdate(form.birthdate) === false && form.birthdate !== ''" class="text-danger mt-2">
          Sie müssen mindestens 18 Jahre alt sein.
        </div>
      </b-form-group>

      <b-form-group label="Frühstück:" v-slot="{ ariaDescribedby }" label-cols="3"
                    align="left">
        <div class="d-flex gap-4">
          <b-form-radio v-model="form.breakfast" required :aria-describedby="ariaDescribedby" name="breakfast-radios" value="breakfastYes">Ja</b-form-radio>
          <b-form-radio v-model="form.breakfast" required :aria-describedby="ariaDescribedby" name="breakfast-radios" value="breakfastNo">Nein</b-form-radio>
        </div>
      </b-form-group>

      <b-button type="submit" variant="primary">Buchung überprüfen</b-button>

    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
      <div class="mt-3">Selected: <strong>{{ form.breakfast }}</strong></div>
    </b-card>
  </div>
</template>

<style scoped>

#BookingForm{
  align-content: start;
}


</style>
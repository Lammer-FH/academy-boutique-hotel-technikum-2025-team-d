<script>
import {
  BButton,
  BCard,
  BForm,
  BFormCheckbox,
  BFormCheckboxGroup,
  BFormGroup,
  BFormInput, BFormInvalidFeedback, BFormRadio, BFormRadioGroup,
  BFormSelect, BFormValidFeedback,
} from "bootstrap-vue-3";

import {useBookingDataStore} from "@/stores/bookingDataStore";
import {useUserStore} from "@/stores/userStore";
import {useFormFieldsStore} from "@/stores/formFieldsStore";

export default {
  name: "BookingForm",
  components: {
    BFormValidFeedback,
    BFormInvalidFeedback,
    BFormRadioGroup,
    BFormRadio, BCard, BButton, BFormCheckbox, BFormCheckboxGroup, BFormSelect, BForm, BFormInput, BFormGroup
  },
  data() {
    return {
      form: {
        email: '',
        confirmemail: '',
        firstname: '',
        lastname: '',
        birthdate: '',
        birthDay: null,
        birthMonth: null,
        birthYear: null,
        breakfast: null,
      },
      show: true,
      bookingData: useBookingDataStore(),
      userData: useUserStore()
    }
  },
  created() {

    const getUserData = () => (this.userData.isLoggedIn && this.userData.hasUserData)
        ? this.userData.user
        : this.bookingData.customer;

    const source = getUserData();

    this.form.firstname = localStorage.getItem('firstname') || source.firstName || '';
    this.form.lastname = localStorage.getItem('lastname') || source.lastName || '';
    this.form.email = localStorage.getItem('email') || source.email || '';
    this.form.confirmemail = localStorage.getItem('confirmemail') || source.email || '';
    this.form.breakfast = localStorage.getItem('breakfast') || this.bookingData.breakfast;

    const birthDate = localStorage.getItem('birthdate') || source.birthDate;
    if (birthDate) {
      const birth = new Date(birthDate);
      this.form.birthDay = birth.getDate();
      this.form.birthMonth = birth.getMonth() + 1;
      this.form.birthYear = birth.getFullYear();
      this.form.birthdate = birthDate;
    }

  },
  methods: {
    saveDataOnReload(key, value) {
      localStorage.setItem(key, value);
      this.form[key] = value;
    },

    updateBookingDataStore() {
      this.bookingData.setFirstName(this.form.firstname);
      this.bookingData.setLastName(this.form.lastname);
      this.bookingData.setBreakfast(this.form.breakfast);
      this.bookingData.setBirthDate(this.form.birthdate);
      this.bookingData.setEmail(this.form.email)

      console.log(this.bookingData)
    },

    validateBirthdate() {
      if (!this.birthdate) return false;

      const today = new Date();
      const birth = new Date(this.birthdate);

      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
      }

      return age >= 18;
    },

    validateEmails() {
      return this.form.email === this.form.confirmemail;
    },

    onSubmit() {
      if (!this.form.birthDay || !this.form.birthMonth || !this.form.birthYear) {
        alert("Bitte geben Sie Ihr vollständiges Geburtsdatum ein.");
        return;
      }

      this.form.birthdate = this.form.birthDay && this.form.birthMonth && this.form.birthYear
          ? `${this.form.birthYear}-${String(this.form.birthMonth).padStart(2, '0')}-${String(this.form.birthDay).padStart(2, '0')}`
          : '';

      if (this.validateBirthdate(this.form.birthdate) === false) {
        alert("Sie müssen mindestens 18 Jahre alt sein.");
        return;
      }

      if (!this.validateEmails()) {
        alert("Die Email Adressen stimmen nicht überein.");
        return;
      }

      this.updateBookingDataStore()
      this.$router.push({path: `/booking/confirmation`})

    },
  },

  computed: {
    dayOptions() {
      if (!this.form.birthMonth || !this.form.birthYear) {
        return [{value: null, text: 'Tag', disabled: true}];
      }

      const maxDays = new Date(this.form.birthYear, this.form.birthMonth, 0).getDate();

      return [{value: null, text: 'Tag', disabled: true}].concat(
          Array.from({length: maxDays}, (_, i) => ({value: i + 1, text: i + 1}))
      );
    },
    monthOptions() {
      return [{value: null, text: 'Monat', disabled: true}].concat([
        {value: 1, text: "Januar"},
        {value: 2, text: "Februar"},
        {value: 3, text: "März"},
        {value: 4, text: "April"},
        {value: 5, text: "Mai"},
        {value: 6, text: "Juni"},
        {value: 7, text: "Juli"},
        {value: 8, text: "August"},
        {value: 9, text: "September"},
        {value: 10, text: "Oktober"},
        {value: 11, text: "November"},
        {value: 12, text: "Dezember"},
      ]);
    },
    yearOptions() {
      const currentYear = new Date().getFullYear();
      const years = [{value: null, text: 'Jahr', disabled: true}];
      for (let y = currentYear; y >= 1900; y--) {
        years.push({value: y, text: y});
      }
      return years;
    },

    birthdate() {
      if (this.form.birthDay && this.form.birthMonth && this.form.birthYear) {
        return `${this.form.birthYear}-${String(this.form.birthMonth).padStart(2, '0')}-${String(this.form.birthDay).padStart(2, '0')}`;
      }
      return '';
    },
    formReset() {
      return useFormFieldsStore().resetMoment
    }
  },
  watch: {
    formReset(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.form = {
          email: '',
          confirmemail: '',
          firstname: '',
          lastname: '',
          birthdate: '',
          birthDay: null,
          birthMonth: null,
          birthYear: null,
          breakfast: null,
        }
      }
    }
  }
}
</script>

<template>
  <div class="pt-4 pb-5">
    <h2 align="left">Persönliche Daten</h2>
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
          label="Geburtsdatum:"
          align="left"
          label-for="birthdate-day"
      >
        <div class="d-flex">
          <!-- Tag -->
          <b-form-select
              id="birthdate-day"
              v-model="form.birthDay"
              :options="dayOptions"
              class="mr-2"
              :disabled="!form.birthMonth || !form.birthYear"
              @input="saveDataOnReload('birthDay', form.birthDay)"
              required
          ></b-form-select>

          <!-- Monat -->
          <b-form-select
              id="birthdate-month"
              v-model="form.birthMonth"
              :options="monthOptions"
              class="mr-2"
              @input="saveDataOnReload('birthMonth', form.birthMonth)"
              required
          ></b-form-select>

          <!-- Jahr -->
          <b-form-select
              id="birthdate-year"
              label="Jahr"
              v-model="form.birthYear"
              :options="yearOptions"
              @input="saveDataOnReload('birthYear', form.birthYear)"
              required
          ></b-form-select>
        </div>
        <div v-if="!form.birthMonth || !form.birthYear" class="text-muted small mt-1">
          Bitte wählen Sie zuerst Monat und Jahr aus.
        </div>
      </b-form-group>

      <b-form-group label="Frühstück:" v-slot="{ ariaDescribedby }"
                    align="left">
        <div class="d-flex gap-4">
          <b-form-radio v-model="form.breakfast"
                        required
                        @input="saveDataOnReload('breakfast', form.breakfast)"
                        :aria-describedby="ariaDescribedby"
                        name="breakfast-radios"
                        :value="true">Ja
          </b-form-radio>
          <b-form-radio v-model="form.breakfast"
                        required
                        @input="saveDataOnReload('breakfast', form.breakfast)"
                        :aria-describedby="ariaDescribedby"
                        name="breakfast-radios"
                        :value="false">Nein
          </b-form-radio>
        </div>
      </b-form-group>

      <b-button class="cta-button" type="submit" variant="primary">Buchungsdaten überprüfen</b-button>
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
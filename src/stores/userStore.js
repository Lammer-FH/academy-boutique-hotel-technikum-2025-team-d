import {defineStore} from 'pinia'
import axios from "axios";


const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1"

export const useUserStore = defineStore('userStore', {
    state: () => ({
        isRegistrationSuccessful: false,
        isLoggedIn: false,
        token: null,
        userId: null,
        error: null,
    }),
    actions: {
        postRegistration(firstName, lastName, email, userName, password) {
            return axios.post(apiUrl + `/register`, {
                "firstname": firstName,
                "lastname": lastName,
                "email": email,
                "username": userName,
                "password": password
            }, { headers: {'Content-Type': 'application/json'}})
                .then(response => {

                    let responseData = response.data;
                    console.log(responseData)
                    this.isRegistrationSuccessful = true


                    //wenn response vorhanden
                    if (response.data && response.data.length > 0) {
                        this.postLogin(email, password);
                    }

                    return true

                })
                .catch(error => {
                    console.error('Fehler:', error);
                    this.error = "Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut"
                    throw error;
                });
        },postLogin(email, password) {
            return axios.post(apiUrl + `/login`, {
                "clientId": email,
                "secret": password
            }, { headers: { 'Content-Type': 'application/json'}})
                .then(response => {

                    let responseData = response.data;
                    console.log("JWT " + responseData)

                    if (response.data && response.data.length > 0) {
                        const [userId, token] = responseData.split("|");
                        this.token = token;
                        this.userId = userId;
                        this.isLoggedIn = true;
                        console.log(userId); // "217"
                        console.log(token);
                        //+ in localStorage speichern
                    }


                })
                .catch(error => {
                    console.error('Fehler:', error);
                    throw error;
                });

        }
    }
})

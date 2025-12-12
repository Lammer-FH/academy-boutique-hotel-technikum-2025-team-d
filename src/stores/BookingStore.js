import {defineStore} from 'pinia'
import axios from "axios";


const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1"

export const useBookingStore = defineStore('BookingStore', {
    state: () => ({
        bookingId: "",
    }),
    actions: {
        postBooking(roomId, startDate, endDate, firstName, lastName, email, birthDate) {
            return axios.post(apiUrl + `/room/${roomId}/from/${startDate}/to/${endDate}`, {
                "firstname": firstName,
                "lastname": lastName,
                "email": email,
                "birthdate": birthDate
            }, { headers: {'Content-Type': 'application/json'}})
                .then(response => {

                    let responseData = response.data;
                    console.log(responseData)
                    this.bookingId = responseData.id;
                    return this.bookingId

                })
                .catch(error => {
                    console.error('Fehler:', error);
                    throw error;
                });
        },
    }
})

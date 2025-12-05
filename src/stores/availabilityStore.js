import {defineStore} from 'pinia'
import axios from "axios";


const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1"

export const useAvailabilityStore = defineStore('RoomAvailabilityStore', {
    //Überprüfen: Braucht man State isAvailable?
    state: () => ({
        isAvailable: null ,
    }),
    actions: {
        loadState(roomId, startDate, endDate) {
            axios.get(apiUrl + `/room/${roomId}/from/${startDate}/to/${endDate}`)
                .then(response => {
                    let responseData = response.data;
                    console.log(responseData)

                    if (responseData.available === true) {
                        this.isAvailable = true;
                    } else {
                        this.isAvailable = false;
                    }
                    console.log(this.isAvailable);

                })
                .catch(error => {
                    console.error('Fehler:', error);
                    //this.isAvailable = false;
                });
        }
    }
})

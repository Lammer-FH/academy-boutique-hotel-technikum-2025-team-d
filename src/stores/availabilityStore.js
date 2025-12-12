import {defineStore} from 'pinia'
import axios from "axios";


const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1"

export const useAvailabilityStore = defineStore('RoomAvailabilityStore', {
    //Überprüfen: Braucht man State isAvailable?
    state: () => ({
        availability: {} ,
    }),
    actions: {
        loadState(roomId, startDate, endDate) {
            axios.get(apiUrl + `/room/${roomId}/from/${startDate}/to/${endDate}`)
                .then(response => {
                    let responseData = response.data;
                    console.log(responseData)

                    if (responseData.available === true) {
                        this.availability[roomId] = true;
                    } else {
                        this.availability[roomId] = false;
                    }
                    console.log(this.availability[roomId]);

                })
                .catch(error => {
                    console.error('Fehler:', error);
                });
        },
        reset() {
            this.availability = {};
        }
    }
})

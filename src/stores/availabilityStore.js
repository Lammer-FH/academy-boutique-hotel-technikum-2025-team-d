import {defineStore} from 'pinia'
import api from "@/services/api";




export const useAvailabilityStore = defineStore('RoomAvailabilityStore', {
    state: () => ({
        availability: {} ,
    }),
    actions: {
        loadState(roomId, startDate, endDate) {
            api.get(`/room/${roomId}/from/${startDate}/to/${endDate}`)
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

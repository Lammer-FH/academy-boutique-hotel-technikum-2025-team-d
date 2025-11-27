import {defineStore} from 'pinia'
import axios from "axios";


const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1"

export const useRoomStore = defineStore('RoomStore', {
    state: () => ({
        roomsList: [],
    }),
    actions: {
        loadState() {
            axios.get(apiUrl + "/rooms")
                .then(response => {
                    this.roomsList = response.data
                    console.log(response.data)
                })
        }
    }
})
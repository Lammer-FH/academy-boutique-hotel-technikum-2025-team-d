import {defineStore} from 'pinia'
import {roomLocalData} from "@/components/room/roomLocalData";
import api from "@/services/api";


const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1"

export const useRoomStore = defineStore('RoomStore', {
    state: () => ({
        roomsList: JSON.parse(localStorage.getItem('roomsList') || '[]') //roomsList: [],
    }),
    actions: {
        loadState() {
           return api.get("/rooms")
                .then(response => {
                    this.roomsList = response.data.map(room => {
                        // 1. Nur Extras mit Wert 1 behalten
                        // 2. Duplikate entfernen
                        const seen = new Set();
                        const filteredExtras = [];

                        for (const extra of room.extras) {
                            const key = Object.keys(extra)[0];
                            const value = extra[key];

                            // Nur Extras mit Wert 1 UND noch nicht gesehen
                            if (value === 1 && !seen.has(key)) {
                                seen.add(key);
                                filteredExtras.push(extra);
                            }
                        }
                        //Lokale Daten (Beschreibung + Bild) hinzufügen
                        const localData = roomLocalData[room.id] || {};

                        return {
                            ...room,
                            extras: filteredExtras,
                            image: localData.image || "/images/roomImages/room1.jpeg",
                            description: localData.description || "Keine Beschreibung verfügbar",
                        };
                    });
                    // ggf löschen
                    localStorage.setItem('roomsList', JSON.stringify(this.roomsList));
                })
                .catch(error => {
                    console.error('Fehler:', error);
                });
        },
        getRoomById(roomId) {
            return this.roomsList.find(room => room.id === roomId);
        }
    }
})

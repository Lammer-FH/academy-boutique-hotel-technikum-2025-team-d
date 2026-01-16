import {defineStore} from 'pinia'
import api from "@/services/apiService";
import {useUserStore} from "@/stores/userStore";

export const useBookingStore = defineStore('BookingStore', {
    state: () => ({
        bookingId: "",
    }),
    actions: {
        postBooking(roomId, startDate, endDate, firstName, lastName, email, birthDate) {
            console.log("=== BOOKING DEBUG ===");
            console.log("Token in localStorage:", localStorage.getItem("token"));
            return api.post(`/room/${roomId}/from/${startDate}/to/${endDate}`, {
                "firstname": firstName,
                "lastname": lastName,
                "email": email,
                "birthdate": birthDate
            })
                .then(response => {

                    let responseData = response.data;
                    console.log(responseData)
                    this.bookingId = responseData.id;


                    const userStore = useUserStore();
                    if (userStore.isLoggedIn) {
                        userStore.fetchUserData();
                    }

                    return this.bookingId
                })
                .catch(error => {
                    console.error('Fehler:', error);
                    throw error;
                });
        },
    }
})

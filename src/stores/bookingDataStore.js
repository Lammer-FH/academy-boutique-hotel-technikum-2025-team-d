import {defineStore} from 'pinia'

export const useBookingDataStore = defineStore('bookingDataStore'
    , {
        state: () => ({
            startDate: "",
            endDate: "",
            roomId: "",
            breakfast: false,
            totalPrice: 0,
            customer: {
                firstName: "",
                lastName: "",
                birthDate: "",
                email: "",
            },
        }),
        getters: {
            nights(state) {
                if (!state.startDate || !state.endDate) return 0;

                const start = new Date(state.startDate);
                const end = new Date(state.endDate);

                const diff = end - start;
                return diff / (1000 * 60 * 60 * 24);
            },
        },
        actions: {
            setStartDate(startDate) {
                this.startDate = startDate
            },
            setEndDate(endDate) {
                this.endDate = endDate
            },
            setRoomId(roomId) {
                this.roomId = roomId
            },
            setBreakfast(breakfast) {
                this.breakfast = breakfast
            },
            setFirstName(firstName) {
                this.customer.firstName = firstName
            },
            setLastName(lastName) {
                this.customer.lastName = lastName
            },
            setBirthDate(birthDate) {
                this.customer.birthDate = birthDate
            },
            setEmail(email) {
                this.customer.email = email
            },
            setTotalPrice(totalPrice) {
                this.totalPrice = totalPrice
            },
            reset() {
                this.$reset();
            }
        }
    })
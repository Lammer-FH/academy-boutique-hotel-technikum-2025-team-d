import { defineStore } from 'pinia'
import { useRoomStore } from '@/stores/roomStore'

export const useBookingDataStore = defineStore('bookingDataStore', {
    state: () => {
        const saved = localStorage.getItem('bookingData')
        return saved
            ? JSON.parse(saved)
            : {
                startDate: "",
                endDate: "",
                roomId: "",
                breakfast: false,
                bookingId: 0,
                customer: {
                    firstName: "",
                    lastName: "",
                    birthDate: "",
                    email: "",
                },
            }
    },
    getters: {
        nights(state) {
            if (!state.startDate || !state.endDate) return 0;

            const start = new Date(state.startDate);
            const end = new Date(state.endDate);

            const diff = end - start;
            return diff / (1000 * 60 * 60 * 24);
        },
        totalPrice() {
            const roomStore = useRoomStore()
            const room = roomStore.getRoomById(this.roomId)

            if (!room || !this.nights) return 0

            return room.pricePerNight * this.nights
        }
    },
    actions: {
        setStartDate(startDate) {
            this.startDate = startDate
            this.save()
        },
        setEndDate(endDate) {
            this.endDate = endDate
            this.save()
        },
        setRoomId(roomId) {
            this.roomId = roomId
            this.save()
        },
        setBreakfast(breakfast) {
            this.breakfast = breakfast
            this.save()
        },
        setFirstName(firstName) {
            this.customer.firstName = firstName
            this.save()
        },
        setLastName(lastName) {
            this.customer.lastName = lastName
            this.save()
        },
        setBirthDate(birthDate) {
            this.customer.birthDate = birthDate
            this.save()
        },
        setEmail(email) {
            this.customer.email = email
            this.save()
        },
        setBookingId(id) {
            this.bookingId = id
            this.save()
        },
        reset() {
            this.$reset()
            localStorage.removeItem('bookingData')
        },
        save() {
            localStorage.setItem('bookingData', JSON.stringify(this.$state))
        }
    }
})

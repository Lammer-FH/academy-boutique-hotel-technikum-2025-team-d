import {defineStore} from 'pinia'


export const useFormFieldsStore = defineStore('FormFieldsStore', {
    state: () => ({
       firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        breakfast: false,
        birthDay: null,
        birthMonth: null,
        birthYear: null,
        resetMoment: null,
    }),
    actions: {

        resetFields() {

            const keysToRemove = ['firstname', 'lastname', 'email', 'confirmemail', 'breakfast', 'birthDay', 'birthMonth', 'birthYear']
            keysToRemove.forEach(key => {
                localStorage.removeItem(key)
                console.log("removed key:", key)
            })

            localStorage.removeItem("bookingData")

            this.resetMoment = new Date()
        }
    }
})
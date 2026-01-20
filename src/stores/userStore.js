import {defineStore} from "pinia";
import api from "@/services/apiService";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        // Auth
        token: localStorage.getItem("token") || null,
        userId: localStorage.getItem("userId") || null,

        //User-Daten
        user: {
            firstName: "",
            lastName: "",
            email: "",
            birthDate: "",
            bookings: [],
        },

        userDataLoading: false,
        userError: null,
    }),

    getters: {
        isLoggedIn: (state) => !!state.token,
        hasUserData: (state) => !!state.user?.email,
        displayName: (state) => {
            const full = `${state.user?.firstName ?? ""} ${state.user?.lastName ?? ""}`.trim();
            return full.length ? full : null
        },
    },

    actions: {
        postRegistration(firstName, lastName, email, userName, password) {
            return api
                .post(
                    "/register",
                    {
                        firstname: firstName,
                        lastname: lastName,
                        email: email,
                        username: userName,
                        password: password,
                    },
                    {headers: {"Content-Type": "application/json", Accept: "application/json"}}
                )
                .then((response) => {
                    const data = response.data?.toString().trim() ?? "";
                    console.log("Registration:", data);

                    if (!data.length) {
                        throw new Error("Registration: Leere Antwort");
                    }

                    return this.postLogin(email, password);
                })
                .catch((error) => {
                    console.error("Registration Fehler:", error);
                    throw error;
                });
        },

        postLogin(email, password) {
            return api
                .post(
                    "/login",
                    {
                        clientId: email,
                        secret: password,
                    },
                    {headers: {"Content-Type": "application/json", Accept: "application/json"}}
                )
                .then((response) => {
                    const rawData = response.data?.toString().trim() ?? "";
                    console.log("Login:", rawData);

                    if (!rawData.includes("|")) {
                        throw new Error("Login Failed.");
                    }

                    const [userId, token] = rawData.split("|");

                    this.token = token;
                    this.userId = userId;

                    localStorage.setItem("token", this.token);
                    localStorage.setItem("userId", this.userId);

                    return this.fetchUserData();
                })
                .catch((error) => {
                    console.error("Login-Fehler:", error);

                    this.token = null;
                    this.userId = null;
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");
                    throw error;
                });
        },
        fetchUserData() {

            if (!this.token) {
                this.userError = "Nicht eingeloggt";
                this.userDataLoading = false;
                return Promise.reject(new Error("Nicht eingeloggt"));
            }

            this.userDataLoading = true;
            this.userError = null;

            return api
                .get("/user/")
                .then((response) => {
                    const data = response.data;
                    console.log("userData:", data);

                    this.user.firstName = data.firstname ?? "";
                    this.user.lastName = data.lastname ?? "";
                    this.user.email = data.email ?? "";
                    this.user.birthDate = data.birthdate ?? "";
                    this.user.bookings = data.bookings ?? []

                    return this.user;
                })
                .catch((error) => {
                    console.error("FetchUserData Fehler:", error);
                    this.userError = "Userdaten konnten nicht geladen werden";
                    throw error;
                })
                .finally(() => {
                    this.userDataLoading = false;
                });
        }, getBookings() {
            return api
                .get("/user/bookings")
                .then((response) => {
                    const data = response.data;
                    console.log("bookings:", data);

                })
                .catch((error) => {
                    console.error("getBookings Fehler:", error);
                    throw error;
                })
        },
        logout() {
            this.token = null;
            this.userId = null;

            localStorage.removeItem("token");
            localStorage.removeItem("userId");

            this.userError = null;
            this.userDataLoading = false;

            this.user = {
                firstName: "",
                lastName: "",
                email: "",
                birthDate: "",
                bookings: []
            };
            console.log("Logout successful: ", this.user)
        },
    },
});
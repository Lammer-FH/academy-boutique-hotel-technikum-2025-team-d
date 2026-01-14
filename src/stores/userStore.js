import { defineStore } from "pinia";
import axios from "axios";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        // Auth
        token: localStorage.getItem("token") || null,
        userId: localStorage.getItem("userId") || null,

        isRegistrationSuccessful: false,
        error: null,

        // User Data (nur was du brauchst)
        user: {
            firstName: "",
            lastName: "",
            email: "",
            birthDate: "",
        },

        userDataLoaded: false,
        userDataLoading: false,
        userError: null,
    }),

    getters: {
        isLoggedIn: (state) => !!state.token,
    },

    actions: {
        clearError() {
            this.error = null;
            this.userError = null;
        },

        postRegistration(firstName, lastName, email, userName, password) {
            this.clearError();
            this.isRegistrationSuccessful = false;

            return axios
                .post(
                    apiUrl + "/register",
                    {
                        firstname: firstName,
                        lastname: lastName,
                        email: email,
                        username: userName,
                        password: password,
                    },
                    { headers: { "Content-Type": "application/json", Accept: "application/json" } }
                )
                .then((response) => {
                    const data = response.data?.toString().trim() ?? "";
                    console.log("Registration:", data);

                    if (!data.length) {
                        throw new Error("Registration: Leere Antwort");
                    }

                    this.isRegistrationSuccessful = true;

                    // wie bei dir: nach Register direkt Login
                    return this.postLogin(email, password);
                })
                .catch((error) => {
                    console.error("Fehler:", error);
                    this.error = "Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut";
                    throw error;
                });
        },

        postLogin(email, password) {
            this.clearError();

            return axios
                .post(
                    apiUrl + "/login",
                    {
                        clientId: email,
                        secret: password,
                    },
                    { headers: { "Content-Type": "application/json", Accept: "application/json" } }
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

                    // ✅ danach Userdaten laden
                    return this.fetchUserData();
                })
                .catch((error) => {
                    console.error("Fehler:", error);

                    this.token = null;
                    this.userId = null;
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");

                    this.error = "Login fehlgeschlagen. Bitte prüfen Sie E-Mail und Passwort.";
                    throw error;
                });
        },

        fetchUserData() {
            if (!this.token) return Promise.reject(new Error("Nicht eingeloggt"));

            this.userDataLoading = true;
            this.userDataLoaded = false;
            this.userError = null;

            return axios
                .get(apiUrl + "/user/", {
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    const data = response.data;
                    console.log("userData:", data);

                    this.user.firstName = data.firstname ?? "";
                    this.user.lastName = data.lastname ?? "";
                    this.user.email = data.email ?? "";
                    this.user.birthDate = data.birthdate ?? ""; // ✅ API: birthdate

                    this.userDataLoaded = true;
                    return this.user;
                })
                .catch((error) => {
                    console.error("Fehler:", error);
                    this.userError = "Userdaten konnten nicht geladen werden";
                    throw error;
                })
                .finally(() => {
                    this.userDataLoading = false;
                });
        },

        logout() {
            this.token = null;
            this.userId = null;

            localStorage.removeItem("token");
            localStorage.removeItem("userId");

            this.isRegistrationSuccessful = false;
            this.error = null;
            this.userError = null;

            this.userDataLoaded = false;
            this.userDataLoading = false;

            this.user = {
                firstName: "",
                lastName: "",
                email: "",
                birthDate: "",
            };
            console.log("Logout successful: " + this.user)
        },
    },
});

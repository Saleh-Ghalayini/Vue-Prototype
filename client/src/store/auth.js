import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: null,
        token: null,
    }),
    actions: {
        login(user, token) {
            this.isAuthenticated = true;
            this.user = user;
            this.token = token;
        },
        logout() {
            this.isAuthenticated = false;
            this.user = null;
            this.token = null;
        } 
    }
});
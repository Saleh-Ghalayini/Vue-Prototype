import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false);
    const user = ref(null);
    const token = ref(null);
    
    function login(userData, userToken) {
        isAuthenticated.value = true;
        user.value = userData;
        token.value = userToken;
    }
    
    function logout() {
        isAuthenticated.value = false;
        user.value = null;
        token.value = null;
    }
    
    return {
        isAuthenticated,
        user,
        token,
        login,
        logout
    };
});
import api from '../api/index';

const authService = {

    login(email, password) {
        return api.post('/auth/login', { email, password })
    },
    register(name, email, password) {
        return api.post('/auth/register', { name, email, password })
    },
    logout() {
        return api.post('/auth/logout')
    },
};

export default authService;
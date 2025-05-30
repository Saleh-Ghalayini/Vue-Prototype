import api from '../api/index';

const authService = {
  login(email, password) {
    return api.post('/login', { email, password });
  },
  register(name, email, password) {
    return api.post('/register', { name, email, password });
  },
  logout() {
    return api.post('/auth/logout');
  },
};

export default authService;
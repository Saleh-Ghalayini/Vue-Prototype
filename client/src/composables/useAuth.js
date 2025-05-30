import { ref } from 'vue';
import authService from '../services/authService';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
import { inject } from 'vue';


export function useAuth() {
  const loading = ref(false);
  const error = ref(null);
  const router = useRouter();
  const authStore = useAuthStore();
  const toast = inject('toast');

  const login = async (email, password, remember = false) => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await authService.login(email, password);
      const { user, token } = response.data;
      
      // Store auth data based on remember preference
      if (remember) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(user));
      }
      
      authStore.login(user, token);
      
      toast.success('Login successful');
      
      router.push('/home');
      
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed';
      error.value = errorMessage;
      toast.error(errorMessage);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const register = async (name, email, password) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await authService.register(name, email, password);
      toast.success('Registration successful');
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Registration failed';
      error.value = errorMessage;
      toast.error(errorMessage);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    loading.value = true;
    
    try {
      await authService.logout();
      
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      
      authStore.logout();

      toast.success('Logout successful');

      router.push('/');
    } catch (err) {
      console.error('Logout error:', err);
      toast.error('There was an issue logging out.');
    } finally {
      loading.value = false;
    }
  };


  const checkAuth = () => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        
        authStore.login(user, token);
        return true;
      } catch (err) {

        console.error('Error restoring auth state:', err);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
      }
    }
    
    return false;
  };

  return {
    login,
    register,
    logout,
    checkAuth,
    loading,
    error
  };
}

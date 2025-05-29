<template>
  <div class="flex h-screen w-full bg-background">

    <!-- Left Column - Login Form -->
    <div class="w-full lg:w-1/2 flex flex-col relative bg-primary p-8">

      <!-- Header -->
      <div class="absolute top-8 left-0 right-0 flex justify-between items-center px-8">
        <div class="flex items-center gap-2">
          <span class="text-2xl font-bold text-white font-sans">SEF Hiring Portal</span>
        </div>        <div>
          <a href="#" class="text-white hover:underline transition-all duration-200 hover:text-accent/90">Create an account</a>
        </div>
      </div>
      <!-- End of Header -->
      
      <!-- Form Container -->
      <div class="max-w-md mx-auto my-auto w-full flex flex-col gap-6">
        <!-- Email Field -->
        <div class="flex flex-col gap-1">
          <label for="email" class="text-white">Email</label>
          <div class="relative">
            <!-- Email icon -->
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>              <input 
              type="email"
              id="email"
              v-model="email"
              placeholder="example@gmail.com"
              class="w-full pl-10 pr-4 py-3 rounded bg-white border border-white/20 focus:outline-none focus:border-orange-300 text-gray-800 transition-all duration-200 focus:shadow-sm"
              required
            />
          </div>        </div>
        <!-- End of Email Field -->
         

        <!-- Password Field -->
        <div class="flex flex-col gap-1">
          <label for="password" class="text-white">Password</label>
          <div class="relative">
            <!-- Lock icon -->
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>              <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              class="w-full pl-10 pr-4 py-3 rounded bg-white border border-white/20 focus:outline-none focus:border-orange-300 text-gray-800 transition-all duration-200 focus:shadow-sm"
              required
            />
          </div>
        </div>
        <!-- End of Password Field -->
          
        <!-- Options -->
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="remember-me"
              v-model="rememberMe"
              class="accent-white"
            />
            <label for="remember-me" class="text-sm text-white">Remember me</label>
          </div>
          <a href="#" class="text-sm text-white hover:underline hover:text-accent/90 transition-all duration-200">Forgot password?</a>        </div>
        <!-- End of Options -->
        
        <!-- Submit Button -->        
        <button
          type="submit"
          @click="handleSubmit"
          :disabled="loading"
          class="w-full h-12 bg-[#FDE68A] text-primary rounded font-medium transition hover:bg-[#FADD6B] disabled:opacity-70"
        >
          {{ loading ? 'Signing in...' : 'Sign in' }}
        </button>
      </div>
      <!-- End of Form Container -->

      <!-- Footer -->
      <div class="absolute bottom-8 left-0 right-0 text-center">
        <a href="#" class="text-white hover:underline hover:text-accent/90 transition-all duration-200">Trouble signing in?</a>
      </div>
      <!-- End of Footer -->

    </div>
    <!-- End of Left Column - Login Form -->
     
    <!-- Right Column - Illustration -->
    <div class="hidden lg:flex lg:w-1/2 bg-white justify-center items-center p-8">
      <img src="../assets/images/login-illustration.png" alt="Login Illustration" class="max-w-full max-h-[80vh] object-contain" />
    </div>
  </div>
</template>

<script>

import {ref, computed} from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';
import authService from '../services/authService';
import toastService from '../services/toastService';

export default {
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();    
    
    // Form data
    const email = ref('');
    const password = ref('');
    const rememberMe = ref(false);
    const loading = ref(false);    
    
    // Validate email
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value) {
        return false;
      } else if (!emailRegex.test(email.value)) {
        return false;
      }
      return true;
    };

    // Validate password
    const validatePassword = () => {
      if (!password.value) {
        return false;
      } else if (password.value.length < 6) {
        return false;
      }
      return true;
    };

    // Validate entire form
    const validateForm = () => {
      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();
      return isEmailValid && isPasswordValid;
    };    
    
    // Handle form submission
    const handleSubmit = async () => {
      
      // Validate form and show appropriate error messages
      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();
      
      // If both fields are empty or invalid
      if (!isEmailValid && !isPasswordValid) {
        toastService.error('Please enter your email and password to login');
        return;
      }
      
      // If only email is invalid
      if (!isEmailValid && isPasswordValid) {
        if (!email.value) {
          toastService.error('Email is required');
        } else {
          toastService.error('Please enter a valid email address');
        }
        return;
      }
      
      // If only password is invalid
      if (isEmailValid && !isPasswordValid) {
        if (!password.value) {
          toastService.error('Password is required');
        } else {
          toastService.error('Password must be at least 6 characters');
        }
        return;
      }
      
      // If validation failed, return early
      if (!isEmailValid || !isPasswordValid) {
        return;
      }
      
      // Show loading state
      loading.value = true;
      
      try {
        // Call the login API
        const response = await authService.login(email.value, password.value);
        
        // Extract user and token from response
        const { user, token } = response.data;
        
        // Store in localStorage or sessionStorage based on rememberMe
        if (rememberMe.value) {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('user', JSON.stringify(user));
        }
        
        // Update store
        authStore.login(user, token);
        
        // Show success message
        toastService.success('Login successful');
        
        // Navigate to home page
        router.push('/home');
      } catch (error) {
        // Handle login error
        console.error('Login error:', error);
        toastService.error(error.response?.data?.message || 'Login failed. Please check your credentials.');
      } finally {
        // Hide loading state
        loading.value = false;
      }
    };
      return {
      email,
      password,
      rememberMe,
      loading,
      handleSubmit,
      validateEmail,
      validatePassword
    };

  }
}

</script>
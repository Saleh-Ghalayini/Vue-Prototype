<template>
  <div class="flex h-screen w-full bg-background">
    <div class="w-full lg:w-1/2 flex flex-col relative bg-primary p-8">
      <div class="absolute top-8 left-0 right-0 flex justify-between items-center px-8">
        <div class="flex items-center gap-2">
          <span class="text-2xl font-bold text-white font-sans">SEF Hiring Portal</span>
        </div>
        <div>
          <router-link to="/" class="text-white hover:underline transition-all duration-200 hover:text-accent/90">Go back to sign in</router-link>
        </div>
      </div>
      <div class="max-w-md mx-auto my-auto w-full flex flex-col gap-6">
        <div class="flex flex-col gap-1">
          <label for="name" class="text-white">Full Name</label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input 
              type="text"
              id="name"
              v-model="name"
              placeholder="Enter your full name"
              class="w-full pl-10 pr-4 py-3 rounded bg-white border border-white/20 focus:outline-none focus:border-orange-300 text-gray-800 transition-all duration-200 focus:shadow-sm"
              required
            />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label for="email" class="text-white">Email</label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <input 
              type="email"
              id="email"
              v-model="email"
              placeholder="example@gmail.com"
              class="w-full pl-10 pr-4 py-3 rounded bg-white border border-white/20 focus:outline-none focus:border-orange-300 text-gray-800 transition-all duration-200 focus:shadow-sm"
              required
            />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label for="password" class="text-white">Password</label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Create a password"
              class="w-full pl-10 pr-4 py-3 rounded bg-white border border-white/20 focus:outline-none focus:border-orange-300 text-gray-800 transition-all duration-200 focus:shadow-sm"
              required
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';

const name = ref('');
const email = ref('');
const password = ref('');

const router = useRouter();

const { register, loading, error } = useAuth();
const toast = inject('toast');

const validateName = () => {
  if (!name.value || name.value.trim().length < 2) {
    return false;
  }
  return true;
};

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value) {
    return false;
  } else if (!emailRegex.test(email.value)) {
    return false;
  }
  return true;
};

const validatePassword = () => {
  // Password must be at least 6 characters and include at least one letter and one number
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!password.value) {
    return false;
  } else if (!passwordRegex.test(password.value)) {
    return false;
  }
  return true;
};

const handleSubmit = async () => {

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  
  if (!isNameValid) {
    toast.error('Please enter your full name');
    return;
  }
  
  if (!isEmailValid) {
    if (!email.value) {
      toast.error('Email is required');
    } else {
      toast.error('Please enter a valid email address');
    }
    return;
  }
  
  if (!isPasswordValid) {
    if (!password.value) {
      toast.error('Password is required');
    } else {
      toast.error('Password must be at least 6 characters and include at least one letter and one number');
    }
    return;
  }

  try {
    await register(name.value, email.value, password.value);
    router.push('/');
  } catch (err) {
    // Error handling is already inside the composable
  }
};
</script>

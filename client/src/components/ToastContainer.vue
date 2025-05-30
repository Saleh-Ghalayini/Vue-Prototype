<template>
  <div class="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
    
    <!-- Render each toast in the array -->
    <Toast 
      v-for="toast in toasts.toasts" 
      :key="toast.id"
      :show="toast.show"
      :type="toast.type"
      :message="toast.message"
      :duration="toast.duration"
      @close="() => hideToast(toast.id)"
    />
  </div>
</template>

<script setup>
import Toast from './Toast.vue';
import toastService from '../services/toastService';

// Get the state and methods from the toast service
const { state: toasts, hideToast } = toastService;
</script>

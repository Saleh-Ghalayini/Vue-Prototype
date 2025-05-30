<template>
  <transition
    enter-active-class="transform transition ease-out duration-300"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="show" 
      class="px-4 py-3 rounded shadow-lg max-w-sm"
      :class="{
        'bg-red-100 text-red-800 border-l-4 border-red-500': type === 'error',
        'bg-green-100 text-green-800 border-l-4 border-green-500': type === 'success',
        'bg-blue-100 text-blue-800 border-l-4 border-blue-500': type === 'info',
        'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500': type === 'warning'
      }"
    >
      <div class="flex items-center">
        <!-- Error Icon -->
        <div v-if="type === 'error'" class="mr-2 flex-shrink-0">
          <svg class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <!-- Success Icon -->
        <div v-else-if="type === 'success'" class="mr-2 flex-shrink-0">
          <svg class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <!-- Info Icon -->
        <div v-else-if="type === 'info'" class="mr-2 flex-shrink-0">
          <svg class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <!-- Warning Icon -->
        <div v-else-if="type === 'warning'" class="mr-2 flex-shrink-0">
          <svg class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <p class="text-sm">{{ message }}</p>
        
        <button 
          @click="$emit('close')" 
          class="ml-auto pl-3 flex-shrink-0 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  },
  message: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 3000
  }
});

defineEmits(['close']);
</script>

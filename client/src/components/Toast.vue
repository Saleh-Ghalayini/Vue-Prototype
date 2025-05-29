<template>
  <div 
    v-if="show" 
    class="fixed bottom-4 right-4 px-4 py-3 rounded shadow-lg z-50"
    :class="{
      'bg-red-100 text-red-800 border-l-4 border-red-500': type === 'error',
      'bg-green-100 text-green-800 border-l-4 border-green-500': type === 'success',
      'bg-blue-100 text-blue-800 border-l-4 border-blue-500': type === 'info',
      'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500': type === 'warning'
    }"
  >
    <div class="flex items-center">
      <p>{{ message }}</p>
      <button 
        @click="$emit('close')" 
        class="ml-4 text-gray-600 hover:text-gray-800"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
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
    }
  },
  emits: ['close']
}
</script>
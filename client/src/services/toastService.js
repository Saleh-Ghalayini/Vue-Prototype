import { reactive } from 'vue';

// Create a reactive state for the toast
const state = reactive({
  show: false,
  message: '',
  type: 'info', // 'success', 'error', 'warning', 'info'
  duration: 3000
});

// Toast service to show notifications across the application
export const useToast = () => {
  
  // Show a toast notification
  const showToast = (message, type = 'info', duration = 3000) => {
    state.message = message;
    state.type = type;
    state.duration = duration;
    state.show = true;
    
    // Auto-hide after duration
    if (duration > 0) {
      setTimeout(() => {
        hideToast();
      }, duration);
    }
  };

  // Hide the current toast
  const hideToast = () => {
    state.show = false;
  };

  // Success toast shorthand
  const success = (message, duration) => showToast(message, 'success', duration);
  
  // Error toast shorthand
  const error = (message, duration) => showToast(message, 'error', duration);
  
  // Warning toast shorthand
  const warning = (message, duration) => showToast(message, 'warning', duration);

  // Info toast shorthand
  const info = (message, duration) => showToast(message, 'info', duration);

  return {
    // State (reactive)
    state,

    // Methods
    showToast,
    hideToast,
    success,
    error,
    warning,
    info
  };
};

// Create a singleton instance for use across the app
export default useToast();
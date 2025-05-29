import { reactive } from 'vue';

// Creating a reactive state for the toast
const state = reactive({
  show: false,
  message: '',
  type: 'info', // 'success', 'error', 'warning', 'info'
  duration: 3000
});

// Toast service to show notifications across the application
export const useToast = () => {
  
  const showToast = (message, type = 'info', duration = 3000) => {
    
    // Reset any existing toast
    if (state.show) {
      hideToast();

      // Adding a small delay to ensure that the transition is working properly
      setTimeout(() => {
        activateToast(message, type, duration);
      }, 100);
    } else {
      activateToast(message, type, duration);
    }
  };

  // Helper to activate the toast
  const activateToast = (message, type, duration) => {
    state.message = message;
    state.type = type;
    state.duration = duration;
    state.show = true;
    
    // Auto-hide after duration (if not 0)
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

// Creating a singleton instance for use across the app
export default useToast();
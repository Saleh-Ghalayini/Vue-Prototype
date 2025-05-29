import { reactive } from 'vue';

// Creating a reactive state for toasts with unique IDs
const state = reactive({
  toasts: [],
  nextId: 1
});

// Toast service to show notifications across the application
export const useToast = () => {
  
  const showToast = (message, type = 'info', duration = 3000) => {
    const id = state.nextId++;
    
    // Add new toast to the array
    state.toasts.push({
      id,
      message,
      type,
      duration,
      show: true
    });
    
    // Auto-hide after duration (if not 0)
    if (duration > 0) {
      setTimeout(() => {
        hideToast(id);
      }, duration);
    }
    
    return id;
  };

  // Hide a specific toast by ID
  const hideToast = (id) => {
    const index = state.toasts.findIndex(toast => toast.id === id);
    if (index !== -1) {
      // Mark the toast as hidden first (for animation)
      state.toasts[index].show = false;
      
      // Remove from array after animation completes
      setTimeout(() => {
        state.toasts = state.toasts.filter(toast => toast.id !== id);
      }, 300); // Transition duration
    }
  };
  
  // Clear all toasts
  const clearAll = () => {
    // Mark all as hidden first
    state.toasts.forEach(toast => toast.show = false);
    
    // Remove all after animation
    setTimeout(() => {
      state.toasts = [];
    }, 300);
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
    clearAll,
    success,
    error,
    warning,
    info
  };
};

// Creating a singleton instance for use across the app
export default useToast();
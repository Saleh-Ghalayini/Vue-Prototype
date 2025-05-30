import { reactive } from 'vue';

const state = reactive({
  toasts: [],
  nextId: 1
});

export const useToast = () => {
  
  const showToast = (message, type = 'info', duration = 3000) => {
    const id = state.nextId++;
    
    state.toasts.push({
      id,
      message,
      type,
      duration,
      show: true
    });
    
    if (duration > 0) {
      setTimeout(() => {
        hideToast(id);
      }, duration);
    }
    
    return id;
  };
  const hideToast = (id) => {
    const index = state.toasts.findIndex(toast => toast.id === id);
    if (index !== -1) {
      state.toasts[index].show = false;
      
      setTimeout(() => {
        state.toasts = state.toasts.filter(toast => toast.id !== id);
      }, 300);
    }
  };
  
  const clearAll = () => {
    state.toasts.forEach(toast => toast.show = false);
    
    setTimeout(() => {
      state.toasts = [];
    }, 300);
  };
  const success = (message, duration) => showToast(message, 'success', duration);
  
  const error = (message, duration) => showToast(message, 'error', duration);
  
  const warning = (message, duration) => showToast(message, 'warning', duration);

  const info = (message, duration) => showToast(message, 'info', duration);

  return {
    state,
    showToast,
    hideToast,
    clearAll,
    success,
    error,
    warning,
    info
  };
};

export default useToast();
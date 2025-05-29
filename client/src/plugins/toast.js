import { createApp } from 'vue';
import ToastContainer from '../components/ToastContainer.vue';
import toastService from '../services/toastService';

const ToastPlugin = {
  install: (app) => {
    // Make toastService available globally
    app.config.globalProperties.$toast = toastService;
    
    // Create a div for mounting the toast container
    const toastContainerElement = document.createElement('div');
    toastContainerElement.id = 'toast-container';
    document.body.appendChild(toastContainerElement);
    
    // Create and mount the ToastContainer component
    const ToastContainerApp = createApp(ToastContainer);
    ToastContainerApp.mount(toastContainerElement);
    
    // Provide the toast service to all components
    app.provide('toast', toastService);
  }
};

export default ToastPlugin;
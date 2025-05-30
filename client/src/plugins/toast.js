import { createApp } from 'vue';
import toastService from '../services/toastService';
import ToastContainer from '../components/ToastContainer.vue';

const ToastPlugin = {
  install: (app) => {
    app.config.globalProperties.$toast = toastService;
    
    const toastContainerElement = document.createElement('div');
    toastContainerElement.id = 'toast-container';
    document.body.appendChild(toastContainerElement);
    
    const ToastContainerApp = createApp(ToastContainer);
    ToastContainerApp.mount(toastContainerElement);
    
    app.provide('toast', toastService);
  }
};

export default ToastPlugin;
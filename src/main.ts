import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from '@/router';
import App from './App.vue';
import '@/mock';
import errorHandler from '@/utils/error-handler';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.config.errorHandler = errorHandler;
  
app.mount('#app');

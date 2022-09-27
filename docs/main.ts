import App from './App.vue';
import { createApp } from 'vue';
import router from './router';
import 'uno.css';

const app = createApp(App).use(router);
app.mount('#app');

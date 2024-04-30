import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.config.productionTip = false; // Correctly setting productionTip

import './assets/css/main.css';
import '@fortawesome/fontawesome-free/css/all.css';

app.mount('#app'); // Mounting the app instance to the DOM

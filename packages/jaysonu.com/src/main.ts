import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.css';
import { router } from './routing/router';

const app = createApp(App);

app.use(router);

app.mount('#app');

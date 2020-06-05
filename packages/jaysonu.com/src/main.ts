import { createApp } from 'vue';
import App from './App.vue';
import './styles/variables.css';
import './styles/index.css';
import './styles/icons.css';
import './styles/animations.css';
import './styles/youtube.css';
import './styles/fullpageish.css';

import { router } from './routing/router';

const app = createApp(App);

app.use(router);

app.mount('#app');

import './bootstrap';

import { createApp } from 'vue';

import App from './index.vue';
import router from './router/index.js';
import vuetify from "./vuetify";

const app = createApp(App)

app.use(router);
app.use(vuetify)
app.mount('#app')

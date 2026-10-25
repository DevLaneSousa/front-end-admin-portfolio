import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css';
import 'quasar/src/css/index.sass';
import './css/app.scss';
import { createPinia } from 'pinia';
import { Dialog, Loading, Notify, Quasar } from 'quasar';
import iconSet from 'quasar/icon-set/material-symbols-rounded';
import langPtBR from 'quasar/lang/pt-BR';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

const app = createApp(App);

app.use(Quasar, {
  plugins: { Notify, Dialog, Loading },
  lang: langPtBR,
  iconSet,
  config: {
    dark: true,
    brand: { primary: '#B50316' },
    notify: { position: 'top-right', timeout: 2500 },
  },
});
app.use(createPinia());
app.use(router);
app.mount('#app');

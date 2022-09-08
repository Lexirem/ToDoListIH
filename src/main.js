import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
pinia.use(({ store }) => {
  /* eslint no-param-reassign: "error" */
  store.router = router;
});

createApp(App).use(pinia).use(router).mount('#app');

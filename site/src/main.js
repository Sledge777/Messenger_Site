import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import VueAxios from 'vue-axios'
import axios from 'axios'

const app = createApp(App)
app
    .use(router)
    .use(VueAxios,axios)
    .mount('#app')

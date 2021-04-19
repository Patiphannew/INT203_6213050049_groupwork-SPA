import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseAddNews from './components/BaseAddNews'

const app = createApp(App)
app.component('base-add-news',BaseAddNews)
app.use(router).mount('#app')
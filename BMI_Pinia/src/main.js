import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

// creates apps and mounts all at once
// createApp(App).mount('#app')

// create app.....
const app = createApp(App)

// ... configure app ...
// to use Pinia store
const pinia = createPinia()
app.use(pinia)

// ... mount (load) configured app into browser

app.mount('#app')

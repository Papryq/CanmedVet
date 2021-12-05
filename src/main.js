import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheNavbar from './components/TheNavbar'
import TheFooter from './components/TheFooter'

createApp(App).use(router).component('TheNavbar', TheNavbar).component('TheFooter', TheFooter).mount('#app')

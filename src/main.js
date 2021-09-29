import { createApp } from 'vue'
import App from './App.vue'
import MyFirstPlugin from './plugins/MyFirstPlugin'
import './assets/tailwind.css'
const app = createApp(App)
app.use(MyFirstPlugin, {fontSize: {
    small: 20,
    medium: 30,
    large: 40
}})
app.mount('#app')

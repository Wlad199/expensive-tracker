import { createApp } from 'vue'
import App from './App.vue'

// toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Style
import './scss/null.scss'
import './scss/style.scss'

const app = createApp(App)

app.use(Toast)

app.mount('#app')
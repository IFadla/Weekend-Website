import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
// Import global style
import './assets/scss/styles.scss'
import 'aos/dist/aos.css'
// Import global components
import Navbar from "@/components/ui/Navbar.vue";
import Footer from "@/components/ui/Footer.vue";
import ButtonCTA from "@/components/ui/ButtonCTA.vue";
import ButtonCircle from "@/components/ui/ButtonCircle.vue";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(AOS.init())
app.component("navbar-ui", Navbar);
app.component("footer-ui", Footer);
app.component("button-CTA", ButtonCTA);
app.component("button-circle", ButtonCircle);
app.mount('#app')

import { createApp } from 'vue'
import router from "./router/index";
import App from './CouponFinder.vue'
import "./assets/styles/app.css";

const app = createApp(App);

app.use(router);
app.mount('#app')

import Vue from 'vue'
import ElementUI from 'element-ui';
import "../src/assets/global.scss";
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import './assets/font/font.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
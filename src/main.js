import Vue from 'vue'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import dataV from "@jiaminghi/data-view";
Vue.use(dataV)
import "../src/assets/global.scss";
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import './assets/font/font.css'
import * as echarts from 'echarts';

Vue.prototype.$echarts = echarts;



Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
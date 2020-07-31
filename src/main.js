import Vue from 'vue'
import App from './App.vue'
// 挂载全局请求方法
import Api from './api/index';
Vue.use(Api);

import store from './store' //全局状态 vuex
import './assets/style/common.css' // 公共样式
import router from './router'; //路由

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
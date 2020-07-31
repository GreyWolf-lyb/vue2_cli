import { post } from '../utils/request.js';
// 在组件中可以直接 this.postLogin(传递参数).then()调用

const install = function(Vue) {
    // 登录
    Vue.prototype.postLogin = function(body) {
        return post('/user/login', body)
    }
}

export default install;
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// 获取当前环境
console.log(process.env.NODE_ENV)

// 获取当前环境地址（与配置文件有关）
console.log(process.env.VUE_APP_URL)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

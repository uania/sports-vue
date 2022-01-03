import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/css/common.scss'
import Vant from 'vant'
import 'vant/lib/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(ElementUI)

// 引入jquery
// import $ from 'jquery'
// Vue.prototype.$ = $;   // 当然还有这句话 给vue原型上添加 $ 

// 方法2 是否是移动端
// let isMobil = false
// if (document.body.clientWidth <= 828) {
//   isMobil = true
// }
// Vue.prototype.isMobil = isMobil

// 是否是ie
// Vue.prototype.isIe = IEVersion()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

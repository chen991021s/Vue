import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
//解决移动端点击300ms的延迟(npm下载fastclick)
fastclick.attach(document.body)
//安装VueLazyLoad插件
Vue.use(VueLazyLoad,{
  loading:require('assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

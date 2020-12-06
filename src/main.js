import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import toast from '@/components/commom/toast/index.js'
import vueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(vueLazyLoad)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

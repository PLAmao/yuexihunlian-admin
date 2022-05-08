import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import middleware from './middlewares'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(middleware)
Vue.use(VueLazyload)

const webpSupport = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0

window.webpSupport = webpSupport
Vue.prototype.webpSupport = webpSupport

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

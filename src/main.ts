import Vue from 'vue'
// import App from './App.vue'
import App from './App'
import router from './router'
import store from './store'
import './registerServiceWorker'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入vue-echarts
// @ts-ignore
import ECharts from 'vue-echarts/dist/vue-echarts.js'

Vue.component('v-chart', ECharts)
Vue.use(ElementUI, { size: 'mini' })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: { App },
  render: (h) => h(App)
}).$mount('#app')

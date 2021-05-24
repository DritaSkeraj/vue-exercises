import Vue from 'vue'
import App from './ex2.1/App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './ex2.1/VuexStore'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

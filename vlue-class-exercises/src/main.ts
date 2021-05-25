import Vue from 'vue'
import App from './routing/App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './ex2.1/VuexStore'
import Router from 'vue-router'
import { router } from './routing/router'
import { bootstrap } from './helpers/bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)

Vue.config.productionTip = false
//bootstrap(App, { router })

new Vue({
  //store,
  router,
  render: h => h(App)
}).$mount('#app')

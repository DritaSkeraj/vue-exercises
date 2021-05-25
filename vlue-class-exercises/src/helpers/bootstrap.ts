import Vue, { VueConstructor } from 'vue'
import { Store } from 'vuex'
import Layout from '../components/Layout.vue'
import Markdown from '@components/Markdown.vue'
import DataViewer from '../components/DataViewer.vue'
import Tab from '@components/Tab.vue'
import Tabs from '@components/Tabs.vue'
import Grid from '../components/Grid.vue'
import Router from 'vue-router'

Vue.component('Layout', Layout)
Vue.component('Markdown', Markdown)
Vue.component('DataViewer', DataViewer)
Vue.component('Tab', Tab)
Vue.component('Tabs', Tabs)
Vue.component('Grid', Grid)

export interface BootstrapOptions<S = any> {
  store?: Store<S>
  router?: Router
}

export const bootstrap = <S = any>(App: VueConstructor<Vue>, options?: BootstrapOptions<S>) => {
  const app = new Vue({
    components: { App },
    template: `<App />`,
    store: options?.store,
    router: options?.router
  })

  app.$mount('#app')
}

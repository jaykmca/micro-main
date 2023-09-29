import Vue from 'vue'
import App from './App.vue'
import router  from './routes'

Vue.config.productionTip = false
ue.component("SideBarMenu", () => import("web_common/SideBarMenu"))
//import SideBarMenu from 'web_comon/SideBarMenu'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

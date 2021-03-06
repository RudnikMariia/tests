import Vue from 'vue'
import App from './App.vue'
import store from "@/store/store";
import router from "@/router";
import "@/assets/style/style.scss"

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

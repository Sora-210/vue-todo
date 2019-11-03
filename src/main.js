import Vue from 'vue'
import App from './App.vue'
// import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
  // Store,
  render: h => h(App),
}).$mount('#app')

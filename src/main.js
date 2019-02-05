import Vue from 'vue'
import App from './App.vue'
import ms from './lib/index'

Vue.use(ms)

new Vue({
  el: '#app',
  render: h => h(App)
})

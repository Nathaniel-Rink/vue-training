import Vue from 'vue'
import App from './App.vue'
import myRouter from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
        router: myRouter
}).$mount('#app');

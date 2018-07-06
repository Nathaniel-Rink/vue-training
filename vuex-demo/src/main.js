
//Vue
import Vue from 'vue'

import store from './store/store'

//Entry App
import App from './App.vue'

Vue.config.productionTip = false;
new Vue({
		render: h => h(App),
		store
	},
).$mount('#app');



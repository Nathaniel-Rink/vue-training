//vuex dependency
import 'es6-promise/auto'

//State / store manager
import Vuex from 'vuex'

import Vue from 'vue';

Vue.use(Vuex);

const myStore = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment (state) {
			state.count++
		}
	}
});

export default myStore;
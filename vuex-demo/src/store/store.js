//vuex dependency
import 'es6-promise/auto'

//State / store manager
import Vuex from 'vuex'

import Vue from 'vue';

import actors from './actors-store';
import count from './count-store';

Vue.use(Vuex);

const myStore = new Vuex.Store({
	modules: {
		actors: actors,
		count: count
	}
});

export default myStore;
//vuex dependency
import 'es6-promise/auto'

//State / store manager
import Vuex from 'vuex'

import Vue from 'vue';

import actors from './actors-store';
import count from './count-store';
import myGlobalStore from './my-global-store';

Vue.use(Vuex);

const myStore = new Vuex.Store({
	modules: {
		actors: actors,
		count: count,
		global: myGlobalStore
	}
});

export default myStore;
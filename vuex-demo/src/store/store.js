//vuex dependency
import 'es6-promise/auto'

//State / store manager
import Vuex from 'vuex'

import Vue from 'vue';

Vue.use(Vuex);

const myStore = new Vuex.Store({
	state: {
		count: 0,
		actors: [
			{
				name: 'Leo DiCaprio',
				coolestEver: false
			},
			{
				name: 'John Stamos',
				coolestEver: false
			},			{
				name: 'John Travolta',
				coolestEver: true
			},			{
				name: 'Tom Hanks',
				coolestEver: false
			},			{
				name: 'Tom Cruise',
				coolestEver: false
			},			{
				name: 'Matt Damon',
				coolestEver: false
			},
		]
	},
	mutations: {
		increment (state) {
			state.count++
		},
		incrementBy(state, obj){
			state.count =+ obj.incrementCount;
		},
		resetCounter(state, obj) {
			state.count = obj.newCount;
		}
	},
	getters: {

		//Each getter is passed in state and other getters
		coolestActors: (state, getters) => {
			return state.actors.filter(actor => actor.coolestEver);
		},

		//If getter returns a function, you can pass in arguments
		maxActors: (state) => (max) => {
			return state.actors.slice(0, max);
		}
	}
});

export default myStore;
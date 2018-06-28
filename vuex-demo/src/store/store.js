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
		},
		mutateCountWithAsyncDelay (state) {
			var log1;
			var log2;

			//Capture Before Value
			log1 = state.count;

			//Simulate delay from a fetch or something
			setTimeout(() => {
				state.count++
			}, 1000);

			//Capture After Value
			log2 = state.count;

			//Async in mutation screws up the log
			console.log(`Starting Count: ${log1}`); //NRHG
			console.log(`Ending Count: ${log2}`); //NRHG
		},

		mutateCount (state) {
			var log1;
			var log2;

			//Capture Before Value
			log1 = state.count;

			//Mutation does nothing but update data
			state.count++;

			//Capture After Value
			log2 = state.count;

			//Changes logged correctly
			console.log(`Starting Count: ${log1}`); //NRHG
			console.log(`Ending Count: ${log2}`); //NRHG
		}
	},
	actions: {
		updateCountAsync(context){
			setTimeout(() => {
				context.commit('mutateCount');
			}, 1000);
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
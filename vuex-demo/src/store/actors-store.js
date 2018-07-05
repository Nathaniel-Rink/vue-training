const myStore = {

	namespaced: true,
	//namespaced: true is required to use the map functions

	state: {
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
};

export default myStore;
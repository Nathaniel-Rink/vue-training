const myStore = {

	namespaced: true,
	//namespaced: true is required to use the map functions

        state: {
		count: 0
	},
	mutations: {
		increment (state) {
			state.count++
		},
		incrementBy(state, obj){
			state.count = state.count + obj.incrementCount;
			console.log(typeof obj.incrementCount); //NRHG
		},
		resetCounter(state, obj) {
			state.count = obj.newCount;
		},

		//Mutation handling too much
		mutateCountWithAsyncDelay (state) {
			let log1;
			let log2;

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

		//mutation focused on data, with action handling the rest
		mutateCount (state) {
			let log1;
			let log2;

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

		//Action handles the asynchronous call
		updateCountAsync(context){
			setTimeout(() => {
				context.commit('mutateCount');
			}, 1000);
		}
	}
};

export default myStore;
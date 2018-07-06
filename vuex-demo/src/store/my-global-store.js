const myStore = {

	namespaced: false,
	//namespaced: false to use global store modules

	state: {
		myMessage: 'i am from a global store!'
	},
	getters: {

		message: (state, getters) => {
			console.log(state); //NRHG
			return state.myMessage;
		}
	}
};

export default myStore;
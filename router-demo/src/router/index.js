import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const myRouter = new VueRouter({
	routes
});

//Global route guards

//beforeEach resolves in order, and global beforeEach route guards resolve before component guards
myRouter.beforeEach((to, from, next) => {
		console.log('GLOBAL-BEFORE EACH'); //NRHG
		console.log('to object'); //NRHG
		console.log(to); //NRHG
		console.log('from object'); //NRHG
		console.log(from); //NRHG

		/**Next Options
		 [empty] - proceed as usual
		 false - abort route change
		 {any legal route} - redirect to new route
		 error - trigger an error
		 **/
		next();
	}
);

//beforeResolve resolves in order and after component guards. The last guard before nav
myRouter.beforeResolve((to, from, next) => {
		console.log('GLOBAL-BEFORE RESOLVE'); //NRHG
		console.log('to object'); //NRHG
		console.log(to); //NRHG
		console.log('from object'); //NRHG
		console.log(from); //NRHG

		/**Next Options
		 [empty] - proceed as usual
		 false - abort route change
		 {any legal route} - redirect to new route
		 error - trigger an error
		 **/
		next();
	}
);

//afterEach resolve after nav happens. No 'next' because it already occurred
myRouter.afterEach((to, from) => {
		console.log('GLOBAL-AFTER RESOLVE'); //NRHG
		console.log('to object'); //NRHG
		console.log(to); //NRHG
		console.log('from object'); //NRHG
		console.log(from); //NRHG
	}
);

export default myRouter;
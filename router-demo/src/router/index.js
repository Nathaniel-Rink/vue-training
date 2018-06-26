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
		var args = {
			toObject:to,
			fromObject: from
		}
		console.log(args); //NRHG

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
		console.log('GLOBAL-AFTER RESOLVE (no next())'); //NRHG
	}
);

export default myRouter;

/**
 The Full Navigation Resolution Flow

 1 Navigation triggered.
 2 Call leave guards in deactivated components.
 3 Call global beforeEach guards.
 4 Call beforeRouteUpdate guards in reused components.
 5 Call beforeEnter in route configs.
 6 Resolve async route components.
 7 Call beforeRouteEnter in activated components.
 8 Call global beforeResolve guards.
 9 Navigation confirmed.
 10 Call global afterEach hooks.
 11 DOM updates triggered.
 12 Call callbacks passed to next in beforeRouteEnter guards with instantiated instances.
 **/
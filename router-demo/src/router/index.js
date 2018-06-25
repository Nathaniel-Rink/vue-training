import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const myRouter = new VueRouter({
	routes
});

export default myRouter;
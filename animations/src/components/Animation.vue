<template>
	<div>
		<h3>animations</h3>

		<!--clicks are bound to data.myComponent-->
		<button class="btn btn-primary" v-on:click="myComponent='CSSElementTransition'">CSS Transition an element</button>
		<button class="btn btn-primary" @click="myComponent=null">Null out that component</button>
		<button class="btn btn-primary" @click="myComponent='MadeUpName'">CSS Animate an element</button>
		<button class="btn btn-primary" @click="myComponent='JSElementAnimation'">JS vs CSS element</button>
		<button class="btn btn-primary">Transition Individual Component</button>
		<button class="btn btn-primary">Transition Group</button>

		<div class="component">

			<!--:is is bound to myComponent-->
			<component :is="myComponent"></component>
		</div>
	</div>
</template>

<script>
	//Makes sense to import default names as their assigned names
	import CSSElementTransition from './animations/CSSElementTransition';

	//But you CAN import them by any name as long as the export is default
	import MadeUpName from './animations/CSSElementAnimation';

	//Explicitly named exported components must be named correctly on import
	import JSElementAnimation from './animations/JSElementAnimation';


	export default {
		//Name of the exported vue component
		name: 'AnimationsDemo',

		//Local components this component depends upon
		components: {
			CSSElementTransition: CSSElementTransition,
			MadeUpName: MadeUpName,
			JSElementAnimation: JSElementAnimation
		},

		//Always a method!!!
		data: function() {

			//Return component data. Basically private data
			return {
				myComponent: null
			}
		}
	}
</script>
<style scoped>
	.component {
		border: 1px double lightgrey;
		border-radius: 6px;
		padding: 15px;
		margin:300px;
		margin-top: 50px;
	}

</style>

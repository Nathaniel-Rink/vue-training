<template>
	<div>
		<h3>mixin example</h3>
		<button @click="myComponent='ComponentNoMixin'">Remove Mixin</button>
		<button @click="myComponent='ComponentYesMixin'">Apply Mixin</button>
		<div v-if="myComponent" class="component">
			<component :is="myComponent"></component>
		</div>
		<p><i>Above 2 components are identical except one merges in MyMixin</i></p>
	</div>
</template>

<script>
	//Makes sense to import default names as their assigned names
	import ComponentNoMixin from './ComponentNoMixin';
	import ComponentYesMixin from './ComponentYesMixin';

	export default {
		//Name of the exported vue component
		name: 'MixinDemo',

		//Local components this component depends upon
		components: {
			ComponentNoMixin: ComponentNoMixin,
			ComponentYesMixin: ComponentYesMixin
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
		margin: 50px 300px;
	}

</style>

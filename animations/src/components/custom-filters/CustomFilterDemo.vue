<template>
	<div>
		<h3>Custom Filter example</h3>
		<div class="component">
			<my-component></my-component>
		</div>
	</div>
</template>

<script>
	//Makes sense to import default names as their assigned names
	import MyComponent from './MyComponent';

	export default {
		//Name of the exported vue component
		name: 'CustomFilterDemo',

		//Local components this component depends upon
		components: {
			MyComponent: MyComponent
		},

		//Always a method!!!
		data: function() {

			//Return component data. Basically private data
			return {
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

<template>
	<div>
		<input v-my-directive>
		<p><i>Adding v-my-directive as an attribute activates my custom auto focus directive on the insert hook</i></p>
	</div>
</template>

<script>

	import MyDirective from './MyDirective';

	export default {
		//Name of the exported vue component
		name: 'MyComponent',


		//Local components this component depends upon
		components: {

		},

		directives: {
			myDirective: MyDirective
		},

		//Always a method!!!
		data: function() {
			return {}
		}
	}
</script>
<style scoped>


</style>

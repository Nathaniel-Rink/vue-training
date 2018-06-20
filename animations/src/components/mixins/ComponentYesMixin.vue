<template>
	<div>
		{{bestCaptain}} is the best captain of the Enterprise
	</div>
</template>

<script>
	//Makes sense to import default names as their assigned names
	import MyMixin from './MyMixin';

	export default {
		//Name of the exported vue component
		name: 'ComponentYesMixin',

		created: function () {
			console.log('I love Star Trek');
		},

		mixins: [
			MyMixin
		],

		computed: {
			bestCaptain: function(){
				return this.rightAnswer || this.defaultAnswer;
			}
		},

		//Local components this component depends upon
		components: {

		},

		//Always a method!!!
		data: function() {
			return {
				defaultAnswer: 'Picard'
			};
		}
	}
</script>
<style scoped>


</style>

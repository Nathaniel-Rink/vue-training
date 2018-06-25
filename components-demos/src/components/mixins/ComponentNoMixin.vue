<template>
	<div>
		{{bestCaptain}} is the best captain of the Enterprise
	</div>
</template>

<script>
	export default {
		//Name of the exported vue component
		name: 'ComponentNoMixin',

		created: function () {
			console.log('I love Star Trek');
		},

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

<template>
	<div>
		<p><input v-model="myInput"></p>
		<p><input v-model="myInput"></p>
		<p><i>v-model two-way binds input value</i></p>
		<p>{{ myInput | capitalize }}</p>
		<p><i>apply a single custom filter 'Capitalize'</i></p>
		<p>{{ myInput | capitalize | breakString }}</p>
		<p><i>Chain custom filters. First 'Capitalize' then 'breakString'</i></p>
		<p>{{ myInput }}</p>
		<p><i>Filters modify rendered text but does NOT mutate source</i></p>

	</div>
</template>

<script>

	import {CapitalizeFilter} from './CapitalizeFilter';
	import {BreakStringFilter} from './BreakStringFilter';

	export default {
		filters: {
			capitalize: CapitalizeFilter,
			breakString: BreakStringFilter
		},

		//Name of the exported vue component
		name: 'MyComponent',

		//Local components this component depends upon
		components: {

		},

		data: function() {
			return {
				myInput: ''
			}
		}
	}
</script>
<style scoped>


</style>

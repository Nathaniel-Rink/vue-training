<template>
	<div class="hello">
		<button @click="incrementCount">increment</button>
		<p>{{countVerbose}}</p>
		<p>{{countShort}}</p>
		<p>{{countShorter}}</p>
		<p>{{count}}</p>

	</div>
</template>

<script>
	//Import mapState where you use it
	import { mapState } from 'vuex';

	//Import lodash where you use it
	import _ from 'lodash';

	export default {
		name: 'HelloWorld',
		methods: {
			incrementCount: function(){
				this.$store.commit('increment');
			}
		},


		// computed expects an object
		computed:

			//mapState returns. but need to merge it if we have local computed calcs
			_.merge(

				{
					// typical way to return a state variable
					countVerbose: function(){
						return this.$store.state.count;
					}
				},

				mapState({
					// same function as countVebose but in arrow function format
					countShort: state => state.count,

					// passing the string value 'count' to mapState is same as `state => state.count`
					countShorter: 'count'
				}),

				// mapState can also be passed an array of state property names
				mapState(['count'])
			)

	}
</script>


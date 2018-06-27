<template>
	<div class="hello">
		<button @click="incrementCount">increment</button>
		<p>{{countVerbose}}</p>
		<p>{{countShort}}</p>
		<p>{{countShorter}}</p>
		<p>{{count}}</p>

		<div class="m-2">
			<ul>
				<li v-for="actor in renderedActors" :key="actor.name" class="text-left">{{actor.name}}</li>
			</ul>
			<button @click="showCoolest = !showCoolest">{{showCoolest ? 'show all' : 'show only coolest'}}</button>
			<p>
				<label>limit # of actors
					<br><input v-model="maxActors">{{maxActors}}
				</label>
			</p>
		</div>
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
					},

					coolestActors: function(){
						//Access getters from the $store.getters prop
						return this.$store.getters.coolestActors;
					},
					limitByMax: function(){
						//Access getters from the $store.getters prop
						return this.$store.getters.maxActors(this.maxActors);
					},

					renderedActors: function(){
						if(this.maxActors){
							this.showCoolest = false;
							return this.limitByMax;
						}
						else if(this.showCoolest){
							return this.coolestActors;
						}
						else {
							return this.actors
						}
					}
				},

				mapState({
					// same function as countVebose but in arrow function format
					countShort: state => state.count,

					// passing the string value 'count' to mapState is same as `state => state.count`
					countShorter: 'count'
				}),

				// mapState can also be passed an array of state property names
				mapState([
					'count',
					'actors'
				])
			),
		data: function(){
			return {
				showCoolest: false,
				maxActors: null
			}
		}
	}
</script>


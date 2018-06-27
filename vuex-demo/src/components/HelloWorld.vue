<template>
	<div class="hello">
		<button @click="incrementCount">increment</button>
		<p>{{countVerbose}}</p>
		<p>{{countShort}}</p>
		<p>{{countShorter}}</p>
		<p>{{count}}</p>

		<div class="m-2">
			<h4>actors</h4>
			<ul>
				<li v-for="actor in renderedActors" :key="actor.name" class="text-left">{{actor.name}}</li>
			</ul>
			<h4>actors with getters defined by mapGetters</h4>
			<ul>
				<li v-for="actor in duplicateRenderedActors" :key="actor.name" class="text-left">{{actor.name}}</li>
			</ul>
			<button @click="showCoolest = !showCoolest">{{showCoolest ? 'show all' : 'show only coolest'}}</button>
			<p>
				<label>limit # of actors
					<br><input v-model="actorLimit">{{actorLimit}}
				</label>
			</p>
		</div>
	</div>
</template>

<script>
	//Import mapState & mapGetters where you use it
	import { mapState } from 'vuex';
	import { mapGetters } from 'vuex'

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

					coolestActorsAlias: function(){
						//Access getters from the $store.getters prop
						return this.$store.getters.coolestActors;
					},
					limitByMaxAlias: function(){
						//Access getters from the $store.getters prop
						return this.$store.getters.maxActors(this.actorLimit);
					},

					renderedActors: function(){
						if(this.actorLimit){
							this.showCoolest = false;
							return this.limitByMaxAlias;
						}
						else if(this.showCoolest){
							return this.coolestActorsAlias;
						}
						else {
							return this.actors
						}
					},
					duplicateRenderedActors: function(){
						if(this.actorLimit){
							this.showCoolest = false;
							return this.maxActors(this.actorLimit);
						}
						else if(this.showCoolest){
							return this.myCoolestActor;
						}
						else {
							return this.actors
						}
					}
				},

				//use mapGetters just like mapState to easily set up getters
				mapGetters([
					'maxActors'
				]),
				mapGetters({
					myCoolestActor: 'coolestActors'
				}),
				
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
				actorLimit: null
			}
		}
	}
</script>


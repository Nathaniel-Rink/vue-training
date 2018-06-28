<template>
	<div class="hello">
		<h6 class="mt-5">Counters using various gets</h6>
		<p>{{countVerbose}}</p>
		<p>{{countShort}}</p>
		<p>{{countShorter}}</p>
		<p>{{count}}</p>

		<h6 class="mt-5">Mutate with $store.commit by 'increment' argument</h6>
		<button @click="addOne">add 1</button>

		<h6 class="mt-5">Mutate with mapMutation([incrementBy])</h6>
		<label>Increment By More
			<br><input v-model="incrementCount">{{incrementCount}}
		</label>
		<button @click="incrementBy({incrementCount: incrementCount})">add {{incrementCount}}</button>

		<h6 class="mt-5">Mutate with alias fooDaddy via mapMutation</h6>
		<label>Reset To
			<br><input v-model="newCount">{{newCount}}
		</label>
		<button @click="fooDaddy({newCount: newCount})">reset to {{newCount}}</button>

		<h6 class="mt-5">Clear it using this.$store.commit with a payload object</h6>
		<button @click="WIPEITOUT()">WIPE IT OUT</button>

		<div class="m-5">
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

		<h6 class="mt-5">Logging with Action vs Mutation</h6>
		<p>{{count}}</p>
		<p>
			<button @click="mutateCountWithAsyncDelay()">Mutate Count directly with delay</button>
		</p>
		<p>
			<button @click="updateCountViaAsyncAction()">Update Count via action, but with delay</button>
		</p>
		<p>Note that when the mutation handles the asynchronous action, the "log" in console is broken.</p>
		<p>When mutations are separated to only update data while the action handles the asynchronous business
		logic, the log works the log works</p>
	</div>
</template>

<script>
	//Import mapState & mapGetters where you use it
	import { mapState } from 'vuex';
	import { mapGetters } from 'vuex'
	import { mapMutations } from 'vuex'

	//Import lodash where you use it
	import _ from 'lodash';

	export default {
		name: 'HelloWorld',
		methods:
			_.merge(
				{
					addOne: function(){

						// call mutation from $store
						this.$store.commit('increment');
					},

					WIPEITOUT(){
						//call mutation from $store in payload form
						this.$store.commit({
							type: 'resetCounter',
							newCount: 0
						})
					},

					mutateCountWithAsyncDelay(){
						this.$store.commit('mutateCountWithAsyncDelay');
					},

					updateCountViaAsyncAction(){
						this.$store.dispatch('updateCountAsync')
					}
				},
				//Import mutations directly with array so the this.method of same name calls commit('mutation_name')
				mapMutations([
					'incrementBy'
				]),

				//alias mutation commit to this.methogd_name
				mapMutations({
					fooDaddy: 'resetCounter'
				})
			),


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
				actorLimit: null,
				incrementCount: null,
				newCount: 0
			}
		}
	}
</script>


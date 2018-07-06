<template>
	<div class="hello">
		<h6 class="mt-5">Counters using various gets</h6>
		<p>Define countVerbose as a get function in computed: {{countVerbose}}</p>
		<p>Define countShort with mapState shorthand and ES6 arrow function {{countShort}}</p>
		<p>Use mapState's 'countShorter: 'count' {{countShorter}}</p>
		<p>The shortest definition for count is to use a mapState:['count'] array{{count}}</p>

		<h6 class="mt-5">Mutate with $store.commit by 'increment' argument</h6>
		<button @click="addOne">add 1</button>

		<h6 class="mt-5">Mutate with mutation imported from store with mapMutation array format: mapMutation(['incrementBy'])</h6>
		<label>Increment By More
			<br><input v-model.number="incrementCount">{{incrementCount}}
		</label>
		<button @click="incrementBy({incrementCount: incrementCount})">add {{incrementCount}}</button>

		<h6 class="mt-5">Mutate with alias fooDaddy via mapMutation</h6>
		<label>Reset To
			<br><input v-model.number="newCount">{{newCount}}
		</label>
		<button @click="fooDaddy({newCount: newCount})">reset to {{newCount}}</button>

		<h6 class="mt-5">Clear it using this.$store.commit with a payload object</h6>
		<button @click="WIPEITOUT()">WIPE IT OUT</button>

		<div class="m-5 text-left">
			<h4>actors</h4>
			<p>This renderedActors list uses computed properties defined by directly linking to $store.getters['name']</p>
			<ul>
				<li v-for="actor in renderedActors" :key="actor.name" class="text-left">{{actor.name}}</li>
			</ul>
			<p>This renderedActors list uses computed properties defined using the mapState getters helper</p>
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

		<h6 class="mt-5">This message is from a getter in global state!</h6>
		<p>{{message}}</p>
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
						console.log(this.$store); //NRHG
						this.$store.commit('count/increment');
					},

					WIPEITOUT(){
						//call mutation from $store in payload form
						this.$store.commit({
							type: 'count/resetCounter',
							newCount: 0
						})
					},

					mutateCountWithAsyncDelay(){

						//Look in the console and see that simulating an async delay breaks logging
						//The mutation should be free of async implications
						this.$store.commit('count/mutateCountWithAsyncDelay');
					},

					updateCountViaAsyncAction(){
						this.$store.dispatch('count/updateCountAsync')
					}
				},
				//Import mutations directly with array so the this.method of same name calls commit('mutation_name')
				mapMutations('count/', [
					'incrementBy'
				]),

				//alias mutation commit to this.methogd_name
				mapMutations({
					fooDaddy: 'count/resetCounter'
				})
			),


		// computed expects an object
		computed:

		//mapState returns. but need to merge it if we have local computed calcs
			_.merge(

				{
					// typical way to return a state variable
					countVerbose: function(){
						return this.$store.state.count.count;
					},

					coolestActorsAlias: function(){
						//Access getters from the $store.getters
						// 'actors' is the namespace defined in the module import in store
						return this.$store.getters['actors/coolestActors'];
					},
					limitByMaxAlias: function(){
						//Access getters from the $store.getters prop. Pass in an argument
						return this.$store.getters['actors/maxActors'](this.actorLimit);
					},

					renderedActors: function(){
						if(this.actorLimit){
							this.showCoolest = false;

							//limitByMaxAlias is defined directly by $store.getters above(with an argument)
							return this.limitByMaxAlias;
						}
						else if(this.showCoolest){

							//coolestActorsAlias is defined directly by $store.getters above
							return this.coolestActorsAlias;
						}
						else {
							return this.actors
						}
					},
					duplicateRenderedActors: function(){
						if(this.actorLimit){
							this.showCoolest = false;

							//this['actors/maxActors'] is imported in mapGetters array format below
							return this['actors/maxActors'](this.actorLimit);
						}
						else if(this.showCoolest){

							//this['actors/maxActors'] is defined in mapGetters property form below
							return this.myCoolestActor;
						}
						else {
							return this.actors
						}
					},
					message: function(){
						//Property Style getters access
						//For global module!
						return this.$store.getters.message;
					}
				},

				//use mapGetters just like mapState to easily set up getters in array format
				mapGetters([
					'actors/maxActors'
				]),
				mapGetters({
					//name the getter prop myCoolestActor and pull it from the store with a string format.
					// 'actors' is the namespace defined in the module import in store
					myCoolestActor: 'actors/coolestActors'
				}),

				mapState({
					// same function as countVebose but in arrow function format
					countShort: state => state.count,

					// passing the string value 'count' to mapState is same as `state => state.count`
					countShorter: 'count'
				}),

				// mapState can also be passed an array of state property names
				mapState([
					'count'
				]),
				mapState( 'actors', [
					'actors'
				]),
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


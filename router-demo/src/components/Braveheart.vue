<template>
  <div class="m-3">
    <h4>"Well. We didn't get dressed up for nothing."</h4>
    <p class="small font-italic">Below we use a dynamic router param, plus another param, plus a query string to play clue!</p>
    <p>I think {{character}} did it in {{room}} with a {{weapon}}</p>
    <router-link :to="easterEgg"><button>secret button</button></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
	export default {
		name: 'Braveheart',
                computed: {
			character: function(){
				return this.$route.params.accused;
                        },
	                weapon: function(){
		                return this.$route.params.weapon;
	                },
                        room: function(){
				return this.$route.query.myQuery;
                        },
	                easterEgg: function(){
				return this.$route.path + '/easter-egg?myQuery=' + this.room;
                        }
                },
                methods: {
			helloRoute: function(msg){
				console.log(msg); //NRHG
                        }
                },
		beforeRouteEnter (to, from, next) {
			console.log('COMPONENT - BEFORE ROUTE ENTER - called before the route that renders this component is confirmed'); //NRHG
                        next( (_this) => _this.helloRoute(`CALLBACK - I'm a callback for beforeRouteEnter.next(_this)`));
		},
		beforeRouteUpdate (to, from, next) {
			console.log('COMPONENT - BEFORE ROUTE UPDATE - called when a param or other change updates route, but reuses component'); //NRHG
			next( () => this.helloRoute(`CALLBACK - I'm a callback for beforeRouteUpdate.next()`));
		},
		beforeRouteLeave (to, from, next) {
			console.log('COMPONENT - BEFORE ROUTE LEAVE - called when the route that renders this component is about to be navigated away from.') //NRHG
			next( () => this.helloRoute(`CALLBACK - I'm a callback for beforeRouteLeave.next()`));

		}
	}
</script>

<style scoped>
  div { background-color: aqua }
</style>

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
                }
	}
</script>

<style scoped>
  div { background-color: aqua }
</style>

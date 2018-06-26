<template>
  <div class="m-3">
    <h4>"You are a fishmonger."</h4>
    <p class="small font-italic">Below we use a dynamic router param, plus another param, plus a query string to play clue!</p>
    <p>I think {{character}} did it in {{room}} with a {{weapon}}</p>
  </div>
</template>

<script>
	export default {
		name: 'Hamlet',
		computed: {
			character: function(){
				return this.$route.params.accused;
			},
			weapon: function(){
				return this.$route.params.weapon;
			},
			room: function(){
				return this.$route.query.myQuery;
			}
		}
	}
</script>

<style scoped>
  div { background-color: aquamarine }
</style>



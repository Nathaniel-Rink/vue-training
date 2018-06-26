<template>
  <div class="hello">
    <button @click="incrementCount">increment</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		methods: {
			incrementCount: function(){
				this.$store.commit('increment');
			}
		},
		computed: {
			count: function(){return this.$store.state.count}
                }
	}
</script>


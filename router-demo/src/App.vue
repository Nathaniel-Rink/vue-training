<template>
	<div>
		<div class="row">
			<div class="col-6">
				<nav-bar></nav-bar>
				<router-view></router-view>
			</div>
			<div class="col-6">
			</div>
		</div>

	</div>
</template>

<script>
	import NavBar from './components/NavBar'

	export default {
		name: 'app',
		components: {
			NavBar
		}
	}
</script>


<style lang="scss">
	@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>


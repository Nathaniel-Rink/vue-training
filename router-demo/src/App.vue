<template>
	<div>
		<div class="row">
			<div class="col-6">
				<nav-bar></nav-bar>
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
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
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>


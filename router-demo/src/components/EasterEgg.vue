<template>
	<transition name="slide-fade">
		<div class="m-3">
			<h1>Child Component!</h1>
			<h4>Up -Up -Down -Down -Left -Right -Left -Right B A Start</h4>
			<p><i>I still have access to the dynamic params. Shame on you, {{$route.params.accused}}!</i></p>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'EasterEgg',
	}
</script>
<style>
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to {
		transform: translateX(10px);
		opacity: 0;
	}
</style>

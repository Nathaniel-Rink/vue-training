<template>
	<div id="example-1">
		<button @click="show = !show">
			Toggle render
		</button>
		<!--"name" ties the div into the automatic vue classes applied during DOM updates-->
		<transition name="my-animation">
			<p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
		</transition>
	</div>
</template>

<script>
	//Exporting default means the import can call this component anything
	export default {
		name: 'CSSElementAnimation',
		data: function() {
			return {
				show: true
			}
		}
	}
</script>

<style scoped>

	/* Entry and exit classes applying...*/
	.my-animation-enter-active {
		animation: the-real-animation .5s;
	}
	.my-animation-leave-active {
		animation: the-real-animation .5s reverse;
	}

	/* ...The animation behavior defined here*/
	@keyframes the-real-animation {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}
</style>

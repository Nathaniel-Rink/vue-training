<template>
	<div id="example-1">
		<button @click="show = !show">
			Toggle render
		</button>
		<!--"name" ties the div into the automatic vue classes applied during DOM updates-->
		<transition name="slide-fade">
			<p v-if="show">hello</p>
		</transition>
	</div>
</template>

<script>
	//Exporting default means the import can call this component anything
	export default {
		name: 'CSSElementTransition',
		data: function() {
			return {
				show: true
			}
		}
	}
</script>

<style scoped>
	/* Define the trasitions. Here we are applying a .3 second ease to all eligible properties*/
	.slide-fade-enter-active {
		transition: all .3s ease;
	}

	/* Define the trasitions. Here we are applying a .8 second custom easing method to all eligible properties*/
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}

	/* Define the properties to which the above transitions will be applied */
	.slide-fade-enter, .slide-fade-leave-to {
		transform: translateX(10px);
		opacity: 0;
	}
</style>

<template>
	<div id="example-3">
		<button @click="show = !show">
			Toggle render
		</button>
		<button @click="myCSS = !myCSS">
			{{myCSS ? 'css' : 'js'}}
		</button>
		<!--"name" ties the div into the automatic vue classes applied during DOM updates-->
		<transition
			v-if="myCSS"
			name="my-animation"
			v-bind:css="myCSS"
		>
			<p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
		</transition>
		<transition
			v-else
			v-on:before-enter="myBeforeEnter"
			v-on:enter="myEnter"
			v-on:leave="myLeave"
			v-bind:css="myCSS"
		>
			<p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
		</transition>
		<p>{{myCSS ? 'see css transition' :  'see js transition hooks in console'}}</p>
	</div>
</template>

<script>
	export default {
		name: 'JSElementAnimation',
		data: function() {
			return {
				show: true,
				myCSS: true
			}
		},
		methods: {
			myBeforeEnter: function(el) {
				console.log('BEFORE ENTER! You could tie into a js animation library here');

			},
			myEnter: function(el, done){
				console.log('ENTER! You could tie into a js animation library here');
				done();
			},
			myLeave: function(el, done){
				console.log('LEAVE! You could tie into a js animation library here');
				done();

			}
		}
	};
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
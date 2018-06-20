<template>
  <div>
  <my-animations-section></my-animations-section>
    <mixin-demo></mixin-demo>
  </div>
</template>

<script>
	import MyAnimationsSection from './components/animations/Animation.vue'
	import MixinDemo from "./components/mixins/MixinDemo";

	export default {
		name: 'app',
		components: {
			MixinDemo,
			MyAnimationsSection
		}
	}
</script>
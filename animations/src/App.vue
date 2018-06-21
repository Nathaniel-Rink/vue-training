<template>
  <div>
  <my-animations-section></my-animations-section>
    <mixin-demo></mixin-demo>
    <custom-component-demo></custom-component-demo>
  </div>
</template>

<script>
	import MyAnimationsSection from './components/animations/Animation.vue'
	import MixinDemo from "./components/mixins/MixinDemo";
	import CustomComponentDemo from "./components/custom-directives/CustomDirectiveDemo";

	export default {
		name: 'app',
		components: {
			CustomComponentDemo,
			MixinDemo,
			MyAnimationsSection
		}
	}
</script>
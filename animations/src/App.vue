<template>
  <div>
  <my-animations-section></my-animations-section>
    <mixin-demo></mixin-demo>
    <custom-component-demo></custom-component-demo>
    <custom-filter-demo></custom-filter-demo>
  </div>
</template>

<script>
	import MyAnimationsSection from './components/animations/Animation.vue'
	import MixinDemo from "./components/mixins/MixinDemo";
	import CustomComponentDemo from "./components/custom-directives/CustomDirectiveDemo";
	import CustomFilterDemo from "./components/custom-filters/CustomFilterDemo";

	export default {
		name: 'app',
		components: {
			CustomFilterDemo,
			CustomComponentDemo,
			MixinDemo,
			MyAnimationsSection
		}
	}
</script>
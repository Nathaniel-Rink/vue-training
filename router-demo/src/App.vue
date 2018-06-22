<template>
  <div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
	  NavBar,
    HelloWorld
  }
}
</script>


<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>


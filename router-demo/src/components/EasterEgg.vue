<template>
  <div class="m-3">
    <h1>Child Component!</h1>
    <h4>Up -Up -Down -Down -Left -Right -Left -Right B A Start</h4>
    <p><i>I still have access to the dynamic params. Shame on you, {{$route.params.accused}}!</i></p>
  </div>
</template>

<script>
	export default {
		name: 'EasterEgg',
	}
</script>

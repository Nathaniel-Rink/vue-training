<template>
  <section class="playground">
    <h1>Welcome to the component playground!</h1>
    <p>Note that this was lazy loaded ON DEMAND because it was imported in the router definition. Prove it by looking at the
      network tab when you change routes - a call for an additional .js file goes out</p>
  </section>
</template>

<script>
  export default {
    name: 'Playground-Async'
  }
</script>

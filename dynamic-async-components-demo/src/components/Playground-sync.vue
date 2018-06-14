<template>
  <section class="playground">
    <h1>Welcome to the component playground!</h1>
    <p>Note that this was loaded on app load because it was imported at the top of index. Prove it by looking at the
      network tab when you change routes - no new calls go out</p>
  </section>
</template>

<script>
  export default {
    name: 'Playground-Sync'
  }
</script>

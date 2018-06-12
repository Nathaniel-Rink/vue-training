<template>
  <section class="playground">
    <h1>Welcome to the component playground!</h1>
    <p>Note that this was lazy loaded ON DEMAND because it was imported in the router definition. Prove it by looking at the
      network tab when you change routes - a call for an additional .js file goes out</p>
    <my-button/>
    <my-header/>
    <my-text-input/>
  </section>
</template>

<script>
  import Button from '@/components/dynamic/Button'
  import Header from '@/components/dynamic/Header'
  import TextInput from '@/components/dynamic/TextInput'

  export default {
    name: 'Playground-Async',

    //Register components - Not necessary for the selectable dynamic component
    components: {
      'my-button': Button,
      'my-header': Header,
      'my-text-input': TextInput
    },

    //data holds the controller for the component. Must be a return function
    data: function () {
      return {

        //Available components
        componentList: [Button, Header, TextInput],

        //Currently selected Component
        selectedComponent: null
      }
    }
  }
</script>

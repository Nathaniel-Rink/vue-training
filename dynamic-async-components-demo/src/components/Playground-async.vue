<template>
  <section class="playground">
    <h1>Welcome to the component playground!</h1>
    <p>Note that this was lazy loaded ON DEMAND because it was imported in the router definition. Prove it by looking at the
      network tab when you change routes - a call for an additional .js file goes out</p>

    <!--selectedComponent is 2-way bound to the select value-->
    <select v-model="selectedComponent">

      <!--provide a disabled label option with value null to match initial state of v-model-->
      <option disabled value=null>Please select one</option>

      <!--each component in the componentList is a value in the option dropdown-->
      <!-- including a key is best practice so in-place-patch strategy doesn't cause unexpected results-->
      <option
        v-for="(item, index) in componentList"
        :key="index"
        :value="item.component"
      >
        {{ item.label }}
      </option>
    </select>

    <hr>

    <!--Dynamically populate this component-->
    <component :is="selectedComponent"></component>

    <!--keep-alive caches the :is components to preserve data-->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

  </section>
</template>

<script>
  export default {
    name: 'Playground-Async',

    //data holds the controller for the component. Must be a return function
    data: function () {
      return {

        //Available components
        componentList: [

          //In prep for async loading, we need to hard code labels (since we don't know component names before we summon component)
          { label: 'Button', component: () => import('@/components/dynamic/Button') },
          { label: 'Header', component: () => import('@/components/dynamic/Header') },
          { label: 'TextInput', component: () => import('@/components/dynamic/TextInput') }
        ],

        //Currently selected Component
        selectedComponent: null
      }
    }
  }
</script>

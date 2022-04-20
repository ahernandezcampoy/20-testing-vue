<template>
  <div>
    <!-- <counter /> -->
    <counter-composition />
    <hr />
    <counter-composition />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import CounterComposition from "./components/CounterComposition.vue";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { Counter, CounterComposition },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

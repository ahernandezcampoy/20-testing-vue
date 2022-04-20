<template>
  <div>
    <h1>Counter: {{ counterStore.count ? counterStore.count : 0 }}</h1>
    <button class="add-composition" @click="counterStore.addOne">+1</button>
    <button class="sub-composition" @click="counterStore.subOne">-1</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { counterStore } from "../store/counterStore";

export default {
  setup() {
    // const count = ref(0);
    // const addOne = () => {
    //   count.value++;
    // };
    // const subOne = () => {
    //   count.value--;
    // };
    // return { count, addOne, subOne };

    return { counterStore };
  },
};
</script>

<style></style>

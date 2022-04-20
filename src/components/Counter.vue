<template>
  <div>
    <h1>{{ msg }}: {{ count ? count : 0 }}</h1>
    <button class="add" @click="addOne">+1</button>
    <button class="sub" @click="subOne">-1</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: "Counter",
    count: 0,
  }),

  methods: {
    addOne() {
      this.count++;
    },
    subOne() {
      this.count--;
    },
  },
};
</script>

<style></style>

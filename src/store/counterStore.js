import { reactive } from "vue";

export const counterStore = reactive({
  count: 0,

  addOne: () => {
    counterStore.count++;
  },

  subOne: () => {
    counterStore.count--;
  },

  reset: () => {
    counterStore.count = 0;
  },
});

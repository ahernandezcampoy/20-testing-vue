import { counterStore } from "@/store/counterStore";

describe("Testing the store in a isolated way", () => {
  afterEach(() => counterStore.reset());

  it("Adding 1 to the counter in the store", () => {
    counterStore.addOne();
    expect(counterStore.count).toBe(1);
  });

  it("Subtracting 1 to the counter in the store", () => {
    counterStore.subOne();
    expect(counterStore.count).toBe(-1);
  });
});

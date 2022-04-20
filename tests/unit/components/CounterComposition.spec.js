import { mount } from "@vue/test-utils";
import Counter from "@/components/CounterComposition";

describe("Testing Composition API", () => {
  it("Rendering counter starting in 0", () => {
    const wrapper = mount(Counter);
    console.log(wrapper.html());

    expect(wrapper.find("h1").text()).toBe("Counter: 0");
  });

  it("Adding 1 to counter", async () => {
    const wrapper = mount(Counter);

    await wrapper.find("button.add-composition").trigger("click");

    expect(wrapper.find("h1").text()).toBe("Counter: 1");
  });

  it("Subtracting 1 to counter", async () => {
    const wrapper = mount(Counter);

    await wrapper.find("button.sub-composition").trigger("click");

    // Con el uso del store, la variable count es global y no se "resetea" el valor entre tests
    // expect(wrapper.find("h1").text()).toBe("Counter: -1")
    expect(wrapper.find("h1").text()).toBe("Counter: 0");
  });

  it("Changing counter value", async () => {
    const wrapper = mount(Counter);

    await wrapper.find("button.add-composition").trigger("click");
    expect(wrapper.find("h1").text()).toBe("Counter: 1");

    await wrapper.find("button.sub-composition").trigger("click");
    expect(wrapper.find("h1").text()).toBe("Counter: 0");

    await wrapper.find("button.sub-composition").trigger("click");
    expect(wrapper.find("h1").text()).toBe("Counter: -1");

    await wrapper.find("button.add-composition").trigger("click");
    await wrapper.find("button.add-composition").trigger("click");
    await wrapper.find("button.add-composition").trigger("click");
    await wrapper.find("button.add-composition").trigger("click");
    expect(wrapper.find("h1").text()).toBe("Counter: 3");
  });
});

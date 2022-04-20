import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter.vue", () => {
  it("Validate msg", () => {
    // Con esta notación se destaca más que es un componente de Vue
    const wrapper = mount(<Counter />);
    
    expect(wrapper.find("h1").text()).toBe("Counter: 0");
  });

  it("Find the 'Add 1' button", () => {
    const wrapper = mount(<Counter />);

    wrapper.find("button.add").trigger("click");
    
    expect(wrapper.find("button.add").text()).toBe("+1");
  });

  // Podemos crear pruebas asíncronas, que esperaran el resultado de los "promises"
  it("Add one to counter", async() => {
    const wrapper = mount(<Counter />);

    await wrapper.find("button.add").trigger("click");
    await wrapper.find("button.add").trigger("click");
    
    expect(wrapper.find("h1").text()).toBe("Counter: 2");
  });

  it("Sub five to counter", async() => {
    const wrapper = mount(<Counter />);

    await wrapper.find("button.sub").trigger("click");
    await wrapper.find("button.sub").trigger("click");
    await wrapper.find("button.sub").trigger("click");
    await wrapper.find("button.sub").trigger("click");
    await wrapper.find("button.sub").trigger("click");
    
    expect(wrapper.find("h1").text()).toBe("Counter: -5");
  });
});

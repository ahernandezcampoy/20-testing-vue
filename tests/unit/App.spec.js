import { mount } from "@vue/test-utils";
import App from "@/App.vue";

/* 
Los tests sueltos se definen con "test()"; 
los pertenecientes a una suite, con "it()"
*/
test("Banal test", () => {
  expect(2 + 2).toBe(4);
});

// describe("Testing App component", () => {
//   it("Default counter value is 0", () => {
//     const wrapper = mount(App);
//     // console.log(wrapper.html());

//     expect(wrapper.html()).toBe("<h1>Counter: 0</h1>");
//   });

//   it("Send a counter with value 1", () => {
//     const wrapper = mount(App, {
//       props: {
//         count: 1,
//       },
//     });
//     // console.log(wrapper.html());

//     expect(wrapper.html()).toBe("<h1>Counter: 1</h1>");
//   });

//   it("Contains 'Counter' word", () => {
//     const wrapper = mount(App, {
//         props: {
//           count: 1,
//         },
//       });
  
//       expect(wrapper.html()).toContain("Counter");
//   });
// });

describe("Random test suite", () => {
  it("Random test", () => {
    expect(3 + 3).toBe(6);
  });
});

import {Test} from "../src/Test";

describe('test unit test', () => {
  test('sayName', () => {
    new Test().sayName('xiaoming')
  });

  test('sayHi', () => {
    Test.sayHi()
  })
});

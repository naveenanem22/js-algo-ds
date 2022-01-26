import { test, expect } from "@jest/globals";
import { helloWorld } from "../helloworld";

test("helloworld test", () => {
  expect(helloWorld()).toBe("Hello world!!!");
});

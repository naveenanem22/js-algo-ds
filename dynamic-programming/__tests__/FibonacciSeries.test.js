import { getNthFibonacciNumber, getFibonacciArray } from "../FibonacciSeries";
import { test, expect } from "@jest/globals";

test("Nth fibonacci number test", () => {
  let n = 0;
  expect(getNthFibonacciNumber(n)).toEqual(0);
  n=14;
  expect(getNthFibonacciNumber(n)).toEqual(377);
  n=13;
  expect(getNthFibonacciNumber(n)).toEqual(233);
  n=5;
  expect(getNthFibonacciNumber(n)).toEqual(5);
});

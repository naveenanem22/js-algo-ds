import {
  getNthFibonacciNumber,
  getFibonacciNumbers,
  getFibonacciNumbersByDP,
  getNthFibonacciNumberByDP,
} from "../FibonacciSeries";
import { test, expect } from "@jest/globals";

test("Nth fibonacci number test", () => {
  let n = 0;
  expect(getNthFibonacciNumber(n)).toEqual(0);
  n = 14;
  expect(getNthFibonacciNumber(n)).toEqual(377);
  n = 13;
  expect(getNthFibonacciNumber(n)).toEqual(233);
  n = 5;
  expect(getNthFibonacciNumber(n)).toEqual(5);
});

test("Get first N fibonacci numbers", () => {
  let n = 5;
  expect(getFibonacciNumbers(n)).toEqual([0, 1, 1, 2, 3, 5]);
  n = 10;
  expect(getFibonacciNumbers(n)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});

test("Nth fibonacci number test by using Dynamic Programming", () => {
  let n = 0;
  expect(getNthFibonacciNumberByDP(n)).toEqual(0);
  n = 14;
  expect(getNthFibonacciNumberByDP(n)).toEqual(377);
  n = 13;
  expect(getNthFibonacciNumberByDP(n)).toEqual(233);
  n = 5;
  expect(getNthFibonacciNumberByDP(n)).toEqual(5);
});

test("Get first N fibonacci number by using Dynamic Programming", () => {
  let n = 5;
  expect(getFibonacciNumbersByDP(n)).toEqual([0, 1, 1, 2, 3, 5]);
  n = 10;
  expect(getFibonacciNumbersByDP(n)).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
  ]);
});

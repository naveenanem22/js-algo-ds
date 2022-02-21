export function getNthFibonacciNumber(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return getNthFibonacciNumber(n - 1) + getNthFibonacciNumber(n - 2);
  }
}
export function getFibonacciNumbers(n) {
  const series = [];
  for (let i = 0; i <= n; i++) {
    series.push(getNthFibonacciNumber(i));
  }
  return series;
}

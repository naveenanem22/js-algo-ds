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

export function getNthFibonacciNumberByDP(n) {
  const fibonacciMap = new Map();
  if (!fibonacciMap.has(n)) {
    if (n === 0) {
      fibonacciMap.set(n, 0);
    } else if (n === 1) {
      fibonacciMap.set(n, 1);
    } else {
      fibonacciMap.set(
        n,
        getNthFibonacciNumber(n - 1) + getNthFibonacciNumber(n - 2)
      );
    }
  }
  return fibonacciMap.get(n);
}

export function getFibonacciNumbersByDP(n) {
  const series = [];
  for (let i = 0; i <= n; i++) {
    series.push(getNthFibonacciNumberByDP(i));
  }
  return series;
}

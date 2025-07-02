function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciSeries(n) {
  let series = [];
  for (let i = 0; i < n; i++) {
    series.push(fibonacci(i));
  }
  return series;
}

console.log(fibonacciSeries(4));
console.log(fibonacci(4));

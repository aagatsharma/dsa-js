function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const fact = factorial(4);
console.log(fact);

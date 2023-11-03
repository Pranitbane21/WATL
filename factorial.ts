function factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const num = 5; // Change this to the number for which you want to calculate the factorial.
  const result = factorial(num);
  
  console.log(`Factorial of ${num} is: ${result}`);
  
  export {}
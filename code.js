/*
  Katas - Functions
*/

/*
------------------------------------------------------
Add Function
*/
function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
  console.log(sum);
}

// Your Code Here.

/*
------------------------------------------------------
Multiply Function
*/
function multiply(num1, num2) {
  let product = 0;
  if (num2 % 2 == 0) {
    for (let i = 0; i < num2 / 2; i++) {
      product += add(num1, num1);
    }
  } else if (num2 % 2 != 0) {
    for (let i = 0; i < num2 / 2; i++) {
      product += add(num1, num1);
    }
    product -= num1;
  }
  return product;
  console.log(product);
}
// Your Code Here.

/*
------------------------------------------------------
Power/Exponentiation Function
*/

function power(x, n) {
  let expResult = 1;
  for (let i = 0; i < n; i++) {
    expResult = multiply(expResult, x);
  }
  return expResult;
  console.log(expResult);
}

// Your Code Here.

/*
------------------------------------------------------
Factorial Function
*/

function factorial(num1) {
  let factResult = num1;

  for (let i = num1; i > 1; i -= 1) {
    factResult = multiply(factResult, i - 1);
  }

  return factResult;
  console.log(factResult);
}

// Your Code Here.

/*
------------------------------------------------------
Bonus - Fibonacci Function
*/
// FIGURE OUT FIBONACCI FUNCTION
function fibonacci(n) {
  if (n > 5) {
    let num1 = 2;
    let num2 = 3;
    let num = 0;
    for (let i = 5; i < n; i++) {
      num = num1 + num2;
      num1 = num - num1;
      num2 = num;
    }
    return num;
    console.log(num);
  } else if (n == 1) {
    let num = 0;
    return num;
    console.log(num);
  } else if (n == 2 || n == 3) {
    let num = 1;
    return num;
    console.log(num);
  } else if (n == 4) {
    let num = 2;
    return num;
    console.log(num);
  } else if (n == 5) {
    let num = 3;
    return num;
    console.log(num);
  } else if (n < 1) {
    console.log("You can only use a positive number.");
  }
}
// Your Code Here.

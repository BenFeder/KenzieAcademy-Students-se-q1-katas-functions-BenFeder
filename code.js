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
}

// Your Code Here.

/*
------------------------------------------------------
Bonus - Fibonacci Function
*/

// Your Code Here.

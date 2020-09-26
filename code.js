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

console.log(add(2, 3));
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

console.log(multiply(4, 7));
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

console.log(power(4, 3));

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

console.log(factorial(6));

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
  } else if (n == 1) {
    let num = 0;
    return num;
  } else if (n == 2 || n == 3) {
    let num = 1;
    return num;
  } else if (n == 4) {
    let num = 2;
    return num;
  } else if (n == 5) {
    let num = 3;
    return num;
  } else if (n < 1) {
    console.log("You can only use a positive number.");
  }
}

console.log(fibonacci(7));
// Your Code Here.

// UNIT TESTS GO HERE

function testPower0() {
  let result = power(2, 0);
  console.assert(
    result === 1,
    JSON.stringify({ function: "power(2,0)", expected: 1, result: result })
  );
}
testPower0();

function testPower1() {
  let result = power(3, 1);
  console.assert(
    result === 3,
    JSON.stringify({ function: "power(3,1)", expected: 3, result: result })
  );
}
testPower1();

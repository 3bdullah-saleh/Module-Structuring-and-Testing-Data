// Predict and explain first...
//  =============> write your prediction here
      // The sum value will be undefined because we are returning nothing from the 
      //  function

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
      // The sum value will be undefined because we are returning nothing from the 
      //  function
// Finally, correct the code to fix the problem
//  =============> write your new code here
            function sum(a, b) {
              return a + b;
            }

            console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

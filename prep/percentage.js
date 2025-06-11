// Calculating the area and perimeter of a rectangle
const height = 10;
const width = 30; 
const area = height * width;
const perimeter = height + width;
console.log(`Area of the rectangle is ${area}`)
console.log(`Area of the rectangle is ${perimeter}`)

// Declaring functions
// const decimalNumber = 0.5; // defined in the global scope of our program
// function convertToPercentage() {
//     const percentage = `${decimalNumber * 100}%`;
//     return percentage;
// }
// const result = convertToPercentage();
// console.log(result);

// Reusing the function
// const output1 = convertToPercentage(0.5);
// const output2 = convertToPercentage(0.231);

// console.log(output1); // trying to pass 0.5
// console.log(output2); // trying to pass 0.231
//Even though you're passing different numbers (0.5, 0.231), 
// the function ignores them. Why?
//Because the function doesn't accept any parameter. 
// It always uses the global variable decimalNumber, 
// which is 0.5. So you always get:

//To make a function work for any number, we need to handle inputs. 
// We do this using a parameter🧶
//Update the function to accept a parameter — a number you give when you call it:

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const output3 = convertToPercentage(0.5);   // 50%
const output4 = convertToPercentage(0.231); // 23.1%


console.log(output3);
console.log(output4);

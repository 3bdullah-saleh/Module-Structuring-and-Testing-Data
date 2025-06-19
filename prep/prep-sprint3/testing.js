// create a function that takes three numbers as parameters
// and returns the largest of the three

// function largestNum(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     }
//     else if (num1 < num2 && num2 > num3) {
//         return num2;
//     }
//     else {
//         return num3;
//     }
// }

// another way to solve the question

// function largestNum(num1, num2, num3)  {
//     let largest = num1;
//     if (num2 > largest) largest = num2
//     if (num3 > largest) largest = num3
//     return largest;
// }

// another way to solve the question
function largestNum(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// tests for our function
console.assert(largestNum(9, 3, 7) === 9, 'largest number in first position');
console.assert(largestNum(1.3, 4.7, 3.1) === 4.7, 'largest number from decimal number');
console.assert(largestNum(5, 3, 7) === 7, 'largest number in third position');
console.assert(largestNum(-3, -4, -5) === -3, 'largest number from negative number');
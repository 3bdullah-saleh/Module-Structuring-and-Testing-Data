//Exercise 1
// Write a function that will calculate the area of a rectangle
//   given it's width and height

// let width = 5;
// let height = 4;

// function calculateArea(width, height) {
//   const area = width * height;
//   console.log('I am inside the function');
//   return area;
// }

// const result = calculateArea(width, height);
// console.log(result);

//Exercise 2

function capitaliseFirstLetter(name) {
  return name[0].toUpperCase() + name.substring(1);
}

function createGreeting(name) {
  const result = capitaliseFirstLetter(name);
  return `Welcome ${result}`;
}

const greeting = createGreeting("barath");
console.log(greeting);
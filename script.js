// --- Warm-Up: Favorite Colors ---
const colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log("Color: " + colors[i]);
}

// --- Number Analyzer ---
const numbers = [];

// Prompt for 5 numbers and push them into the array
for (let i = 0; i < 5; i++) {
  let input = prompt("Enter a number:");
  numbers.push(parseFloat(input));
}

// 1. Build and print the numbers list string
let numbersString = "";
for (let i = 0; i < numbers.length; i++) {
  numbersString = numbersString + numbers[i];
  if (i < numbers.length - 1) {
    numbersString = numbersString + ", ";
  }
}
console.log("Numbers: " + numbersString);

// 2. Calculate and print the sum
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log("Sum: " + sum);

// 3. Calculate and print the average
let average = sum / numbers.length;
console.log("Average: " + average);

// 4. Count and print even numbers
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount = evenCount + 1;
  }
}
console.log("Even count: " + evenCount);

// 5. Find and print the largest value
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest: " + largest);

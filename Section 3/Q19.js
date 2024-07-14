const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 10);
console.log(numbers);
console.log(newNumbers);
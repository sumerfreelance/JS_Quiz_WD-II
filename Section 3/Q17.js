const numbers = [1, 2, 3, 4, 5];
function doubleNumber(num) {
  return num * 2;
}
const doubledNumbers = numbers.map(doubleNumber);
console.log(doubledNumbers);
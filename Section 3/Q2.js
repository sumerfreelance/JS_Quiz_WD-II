let strings = ['apple', 'banana', 'cherry', 'date'];
let result = strings
    .filter(str => str.length >= 5)
    .map(str => str.toUpperCase());
console.log(result);
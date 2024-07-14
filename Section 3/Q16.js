const strings = ['apple', 'ban', 'cherry', 'date', 'fig', 'grape'];

const result = strings
  .filter(str => str.length > 3)
  .map(str => str.toUpperCase())
  .reduce((acc, str) => acc + str, '');

console.log(result);
let nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let oddNumbers = nestedArrays
    .flat()
    .filter(num => num % 2 !== 0);
console.log(oddNumbers);
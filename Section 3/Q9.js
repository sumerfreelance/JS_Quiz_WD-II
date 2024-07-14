let nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let sum = nestedArrays
    .flat()
    .reduce((acc, num) => acc + num, 0);
console.log(sum);
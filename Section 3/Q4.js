const numbers = [1, 2, 3, 4, 5, 6,];

const totalSumOfEvenNumbers = numbers.reduce((sum, number) => {
    return number % 2 === 0 ? sum + number : sum;
}, 0);

console.log(totalSumOfEvenNumbers);
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] % 2 === 0 ? `${numbers[i]} is even` : `${numbers[i]} is odd`);
}
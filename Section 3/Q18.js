const numbers = [1, 2, 3, 4, 5];
try {
  const evenNumber = numbers.find(num => num % 2 === 0);
  if (!evenNumber) throw new Error('No even number found.');

  console.log(evenNumber);
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(sum);
} catch (error) {
  console.error(error.message);
}
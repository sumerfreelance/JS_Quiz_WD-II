function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const average = sum / arr.length;
  return average;
}
console.log(calculateAverage([1, 2, -3, 6, 5]));
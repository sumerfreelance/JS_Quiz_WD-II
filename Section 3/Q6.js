function averageOfPositives(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
      count++;
    }
  }

  if (count === 0) {
    return "0.00";
  }

  const average = sum / count;
  return average.toFixed(2);
}
const mixedIntegers = [3, -1, 4, -5, 6, -2, 9];
console.log(averageOfPositives(mixedIntegers));
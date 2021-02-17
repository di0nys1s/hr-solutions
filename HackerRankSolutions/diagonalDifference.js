function diagonalDifference(arr) {
  let sum = 0;
  let y = arr.length - 1;
  for (let i = 0;  i < arr.length; i++) {
    sum += arr[i][i] - arr[i][y];
    y--;
  }
  sum = sum < 0 ? sum*-1 : sum;

  return sum
}

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const result = diagonalDifference(arr);
// console.log('result', result)

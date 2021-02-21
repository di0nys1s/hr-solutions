// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const sortedArrMax = arr.slice(1, arr.lenght);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  arr.sort((a, b) => b - a)
  const sortedArrMin = arr.slice(1, arr.lenght);
  
  const sumMax = sortedArrMax.reduce(reducer);
  const sumMin = sortedArrMin.reduce(reducer);
  
  return (console.log(sumMin, sumMax))
}

let arr1 = [1, 3, 5, 7, 9];
// miniMaxSum(arr1);

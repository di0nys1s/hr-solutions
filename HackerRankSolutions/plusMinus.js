// Complete the plusMinus function below.
function plusMinus(arr) {
  let plus = 0;
  let minus = 0;
  let zero = 0;
  let result = [];
  const arrLen = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        plus++;
    } else if (arr[i] < 0) {
        minus++;
    }
    else {
        zero++;
    }
  }

  return console.log(
    (plus / arrLen).toFixed(6) +
    "\n" +
    (minus / arrLen).toFixed(6) +
    "\n" +
    (zero / arrLen).toFixed(6) + 
    "\n"
  );

}

const sampleArr = [1, 2, 3, -1, -2, -3, 0, 0];
const plusMinusResult = plusMinus(sampleArr);

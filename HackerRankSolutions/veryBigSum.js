// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  const reducer = (accumulator, current) => accumulator + current;

  if (ar.length > 0) return ar.reduce(reducer);
  else return -1;
}

let x = aVeryBigSum([
  1000000001,
  1000000002,
  1000000003,
  1000000004,
  1000000005,
]);

// console.log('x :>> ', x);

module.exports = { aVeryBigSum };

function compareTriplets(a, b) {
  let scoreA = 0;
  let scoreB = 0;
  for (let i = 0; i < a.length; i++) {
    a[i] > b[i] ? scoreA++ : a[i] < b[i] ? scoreB++ : "";
  }
  return [scoreA, scoreB];
}

a = [17, 28, 30, 50, 60, 70];
b = [99, 16, 8, 40, 50, 90];

const hooray = compareTriplets(a, b);
// console.log("hooray :>> ", hooray);

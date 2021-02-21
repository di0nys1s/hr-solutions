function birthdayCakeCandles(candles) {
  let tallestCount = 1;
  let i = 0;
  candles.sort((a, b) => b - a);
  while (i < candles.length) {
    if (candles[i] === candles[i + 1]) {
        tallestCount++
        i++;
    } else {
        break;
    }
  }

  return tallestCount;
}

let candles = [3, 2, 1, 3]
// birthdayCakeCandles(candles)

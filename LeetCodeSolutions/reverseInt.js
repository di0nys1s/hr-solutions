const reverse = function (x) {
  const strReversed = x.toString().split("").reverse().join("");
  rv =
    parseInt(strReversed) > Math.pow(2, 31)
      ? 0
      : Math.sign(x) * parseInt(strReversed);

  return rv;
};

// reverse(147483648);
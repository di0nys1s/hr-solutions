const reverse = function (x) {
  const reversed = x.toString().split("").reverse().join("");
  rv =
    parseInt(reversed) > Math.pow(2, 31)
      ? 0
      : Math.sign(x) * parseInt(reversed);

  console.log('rv', rv)

  return rv;
};

// reverse(-2147483648);
function timeConversion(s) {
  const sLen = s.length;
  const timeRange = s[sLen - 2] + s[sLen - 1];
  const time24 = s[0] + s[1];

  let rv = "";
  if (timeRange === "AM") {
    let time12 = time24 === "12" ? "00" : time24;
    let sAm = s.replace(time24, time12);
    rv = sAm.slice(0, sLen - 2);
    console.log("rv", rv);
    return rv;
  } else {
    let time12 =
      time24 !== "12"
        ? (parseInt(time24) + 12).toString()
        : parseInt(time24).toString();

    let sPm = s.replace(time24, time12);
    rv = sPm.slice(0, sLen - 2);
    return rv;
  }
}

let s1 = "07:45:45PM";
timeConversion(s1);

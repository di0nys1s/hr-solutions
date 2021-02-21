const expect = require("chai").expect;

describe("aVeryBigSum", function () {
  const aVeryBigSum = require("../HackerRankSolutions/veryBigSum").aVeryBigSum;

  it("should give the sum of the array elements", function () {
    const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
    const sum = 5000000015;

    expect(aVeryBigSum(arr)).to.be.a("number");
    expect(aVeryBigSum(arr)).to.equal(sum);
  });

  it("should give the sum of the array elements including minus numbers", function () {
    const arr = [-1, 2, 3, 4, -5, -3];
    const sum = 0;

    expect(aVeryBigSum(arr)).to.be.a("number");
    expect(aVeryBigSum(arr)).to.equal(sum);
  });

  it("should give sum = 0 if the array is empty", function () {
    const arr = [];
    const sum = -1;

    expect(aVeryBigSum(arr)).to.be.a("number");
    expect(aVeryBigSum(arr)).to.equal(sum);
  });
});

const expect = require("chai").expect;

describe("countApplesAndOranges", function () {
    const countApplesAndOranges = require("../HackerRankSolutions/countApplesAndOranges").countApplesAndOranges;
  
    it("should give the count of apples and oranges", function () {
      const a = 4
      const b = 12
      const s = 7
      const t = 10

      const apples = [2, 3, -4]
      const oranges = [3, -2, -7]

      const result = [1, 1]
  
      expect(countApplesAndOranges(s, t, a, b, apples, oranges)).to.be.a("array");
      expect(countApplesAndOranges(s, t, a, b, apples, oranges)).to.eql(result);
    });
  });
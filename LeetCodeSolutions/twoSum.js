/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = function (nums, target) {
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }

  if (result.length === 0) throw "No two sum solution";

  return result;
};

let nums = [2, 7, 11, 15];
let target = 18;

twoSum(nums, target);

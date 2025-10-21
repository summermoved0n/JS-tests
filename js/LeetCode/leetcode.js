/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const array = [];

  for (let i = 0; i < nums.length; i += 1) {
    nums.forEach((num, index) => {
      if (i !== index && nums[i] + num === target) {
        array.push(i);
        return array;
      }
    });
  }
  return array;
};

// twoSum([2, 7, 11, 15], 9); // [0,1]

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  console.log(x);
  const str = x.split("").reverse().join("");
  console.log(str);
  const match = str === x;
  console.log(match);
  return match;
};

isPalindrome("10"); // true

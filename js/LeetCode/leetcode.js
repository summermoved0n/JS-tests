"use strict";

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
  const str = x.toString().split("").reverse().join("");
  const match = str === x.toString();
  return match;
};

isPalindrome(121); // true

var romanToInt = function (s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i += 1) {
    const currentVal = romanNumerals[s[i]];
    const nextVal = romanNumerals[s[i + 1]];
    if (nextVal && currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
};

var longestCommonPrefix = function (strs) {
  let prefix;

  for (let i = 0; i < strs.length; i += 1) {
    console.log(strs[i].split(""));
  }
};
longestCommonPrefix(["flower", "flow", "flight"]); // "fl"

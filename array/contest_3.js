var applyOperations = function (nums) {
  let p = 0;
  while (p < nums.length - 1) {
    if (nums[p] === nums[p + 1]) {
      nums[p] = nums[p + 1] * 2;
      nums[p + 1] = 0;
    }
    p++;
  }
  let j = 0;
  while (j < nums.length) {
    if (nums[j] === 0) {
      let i = j;
      while (nums[i] === 0 && i < nums.length - 1) {
        i++;
      }
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
    j++;
  }
  return nums;
};

var maximumSubarraySum = function (nums, k) {
  if (nums.length < k) return 0;
  let window = {};
  let windowSum = 0;
  let max = -Infinity;
  let i = 0;
  while (i < nums.length) {
    if (window[nums[i]]) {
      windowSum = nums[i];
      window = {};
      window[nums[i]] = true;
    } else {
      windowSum += nums[i];
      window[nums[i]] = true;
    }
    if (Object.keys(window).length === k) {
      if (windowSum > max) max = windowSum;
      windowSum -= nums[i - k + 1];
      delete window[nums[i - k + 1]];
    }

    i++;
  }
  return max === -Infinity ? 0 : max;
};

console.log(maximumSubarraySum([1, 5, 5, 2, 2], 2));

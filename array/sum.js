var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  let a = 0;
  while (a < nums.length - 2) {
    let b = a + 1;
    let c = nums.length - 1;
    while (b < c) {
      if (nums[a] + nums[b] + nums[c] > 0) {
        c--;
      } else {
        if (nums[a] + nums[b] + nums[c] === 0) {
          result.push([nums[a], nums[b], nums[c]]);
        }
        while (nums[b] === nums[b + 1] && b < c) {
          b++;
        }
        b++;
      }
    }
    while (nums[a] === nums[a + 1] && a < nums.length - 2) {
      a++;
    }
    a++;
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

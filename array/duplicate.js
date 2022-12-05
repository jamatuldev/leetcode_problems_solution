var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let hasValues = map.get(nums[i]);
      hasValues.push(i);
      map.set(nums[i], hasValues);
    } else {
      map.set(nums[i], [i]);
    }
  }
  for (let [, values] of map.entries()) {
    for (let i = 0; i < values.length - 1; i++) {
      if (Math.abs(values[i] - values[i + 1]) <= k) return true;
    }
  }
  return false;
};

var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    while (nums[j] === nums[i]) {
      j++;
      if (j === nums.length) return i + 1;
    }
    nums[i + 1] = nums[j];
    i++;
    j++;
  }
  return i + 1;
};

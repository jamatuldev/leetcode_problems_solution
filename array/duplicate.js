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

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 3));

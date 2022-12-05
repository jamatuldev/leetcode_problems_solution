var search = function (nums, target) {
  let rotatePos = rotatedPos(nums);
  if (rotatePos <= 0) return binarySearch(0, nums.length - 1, nums, target);
  // search at left first
  if (nums[0] <= target) {
    return binarySearch(0, rotatePos - 1, nums, target);
  }
  return binarySearch(rotatePos, nums.length - 1, nums, target);
};

function binarySearch(s, e, nums, target) {
  let m;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (nums[m] > target) e = m - 1;
    else if (nums[m] < target) s = m + 1;
    else return true;
  }
  return false;
}

function rotatedPos(nums) {
  let s = 0;
  let e = nums.length - 1;
  let m;
  if (nums[s] < nums[e]) return 0;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (nums[m - 1] > nums[m] && nums[m] <= nums[m + 1]) {
      return m;
    } else if (nums[s] === nums[m] && nums[m] === nums[e]) {
      if (s - 1 >= 0 && nums[s] < nums[s - 1]) return s;
      if (nums[e - 1] > nums[e]) return e;
      s++, e--;
    } else if (nums[s] <= nums[m]) {
      if (s - 1 >= 0 && nums[s] < nums[s - 1]) return s;
      if (nums[e - 1] > nums[e]) return e;
      s = m + 1;
    } else {
      // if (s - 1 >= 0 && nums[s] < nums[s - 1]) return s;
      e = m - 1;
    }
  }
  return s;
}

console.log(rotatedPos([2, 2, 2, 3, 3, 2]));

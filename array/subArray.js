var checkSubarraySum = function (nums, k) {
  let reminder = new Map();
  reminder.set(0, -1);
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total = total + nums[i];
    let r = total % k;
    if (!reminder.get(r) && reminder.get(r) !== 0) {
      reminder.set(r, i);
    } else if (i - reminder.get(r) > 1) {
      return true;
    }
  }
  return false;
};

console.log(checkSubarraySum([1, 2, 3], 5));

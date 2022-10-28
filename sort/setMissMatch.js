var findErrorNums = function (nums) {
  let i = 0;
  while (i < nums.length) {
    while (nums[i] !== nums[nums[i] - 1]) {
      let temp = nums[i];
      nums[i] = nums[nums[i] - 1];
      nums[temp - 1] = temp;
    }
    i++;
  }
  console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return [nums[i], i + 1];
  }
};

console.log(findErrorNums([1, 3, 2, 1]));

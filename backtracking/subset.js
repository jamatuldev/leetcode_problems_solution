var subsets = function (nums) {
  let res = [];
  function backtrack(temp, startIdx) {
    res.push([...temp]);
    for (let i = startIdx; i < nums.length; i++) {
      temp.push(nums[i]);
      backtrack(temp, i + 1);
      temp.pop();
    }
  }
  backtrack([], 0);
  return res;
};

var subsetsWithDup = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  function backtrack(temp, startIdx) {
    res.push([...temp]);
    for (let i = startIdx; i < nums.length; i++) {
      if (i > startIdx && nums[i] === nums[i - 1]) continue;
      temp.push(nums[i]);
      backtrack(temp, i + 1);
      temp.pop();
    }
  }
  backtrack([], 0);
  return res;
};

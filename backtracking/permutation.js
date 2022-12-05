var permute = function (nums) {
  let res = [];
  function permutaion(way, rem) {
    if (rem.length === 0) return res.push([...way]);
    let newRem = [...rem];
    let item = newRem.shift();
    for (let i = 0; i <= way.length; i++) {
      // need to do some extensive work here
      let newWay = [...way];
      for (let j = way.length; j > i; j--) {
        newWay[j] = newWay[j - 1];
      }
      newWay[i] = item;
      permutaion(newWay, newRem);
    }
  }
  permutaion([], nums);
  return res;
};

var permuteUnique = function (nums) {
  let res = [];
  function backtrack(temp, fromIdxs) {
    if (temp.length === nums.length) res.push([...temp]);
    else {
      let visited = {};
      for (let i = 0; i < nums.length; i++) {
        if (!fromIdxs.includes(i) && !visited[nums[i]]) {
          temp.push(nums[i]);
          visited[nums[i]] = true;
          fromIdxs.push(i);
          backtrack(temp, fromIdxs);
          temp.pop();
          fromIdxs.pop();
        }
      }
    }
  }
  backtrack([], []);
  return res;
};

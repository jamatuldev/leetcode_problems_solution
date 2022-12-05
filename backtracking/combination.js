var letterCombinations = function (digits) {
  if (digits === "") return [];
  let res = [];
  function helper(prc, unprc) {
    if (unprc === "") return res.push(prc);
    let digit = unprc[0];
    let start = (+digit - 1) * 3 - 3;
    if (+digit > 7) start = start + 1;
    let f = String.fromCharCode(97 + start);
    let s = String.fromCharCode(97 + start + 1);
    let t = String.fromCharCode(97 + start + 2);
    helper(prc + f, unprc.substring(1));
    helper(prc + s, unprc.substring(1));
    helper(prc + t, unprc.substring(1));
    if (digit === "9" || digit === "7") {
      let l = String.fromCharCode(97 + start + 3);
      helper(prc + l, unprc.substring(1));
    }
  }
  helper("", digits);
  return res;
};

var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let res = [];
  function backtrack(start, temp, sum) {
    if (sum === target) res.push([...temp]);
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i - 1] === candidates[i]) continue;
      temp.push(candidates[i]);
      backtrack(i, temp, sum + candidates[i]);
      temp.pop();
    }
  }
  backtrack(0, [], 0);
  return res;
};

var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b);
  function backtrack(start, temp, sum) {
    if (sum === target) res.push([...temp]);
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      temp.push(candidates[i]);
      backtrack(i + 1, temp, sum + candidates[i]);
      temp.pop();
    }
  }
  backtrack(0, [], 0);
  return res;
};

var combinationSum3 = function (k, n) {
  let res = [];
  function backtrack(number, sum, temp) {
    if (sum === n) {
      if (temp.length === k) res.push([...temp]);
    }
    if (sum > n) return;
    for (let i = number; i < 9; i++) {
      temp.push(i + 1);
      if (temp.length <= k) backtrack(i + 1, sum + i + 1, temp);
      else {
        temp.pop();
        break;
      }
      temp.pop();
    }
  }
  backtrack(0, 0, []);
  return res;
};

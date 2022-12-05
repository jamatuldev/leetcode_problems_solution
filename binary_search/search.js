var searchRange = function (nums, target) {
  let mid = binarySearch(0, nums.length - 1, nums, target);
  if (mid === -1) return [-1, -1];
  let left = mid;
  let right = mid;
  while (true) {
    let leftResult = binarySearch(0, left - 1, nums, target);
    let rightResult = binarySearch(right + 1, nums.length - 1, nums, target);
    if (leftResult !== -1) left = leftResult;
    if (rightResult !== -1) right = rightResult;
    if (leftResult === -1 && rightResult === -1) return [left, right];
  }
  return [left, right];
};

function binarySearch(s, e, nums, target) {
  let m;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (nums[m] > target) e = m - 1;
    else if (nums[m] < target) s = m + 1;
    else return m;
  }
  return -1;
}
var search = function (nums, target) {
  let rotatePos = rotatedPos(nums);
  if (rotatePos <= 0) return binarySearch(0, nums.length - 1, nums, target);
  else {
    if (target >= nums[rotatePos] && target <= nums[nums.length - 1]) {
      if (target === nums[rotatePos]) return rotatePos;
      return binarySearch(rotatePos, nums.length - 1, nums, target);
    } else return binarySearch(0, rotatePos - 1, nums, target);
  }
};

function rotatedPos(nums) {
  let s = 0;
  let e = nums.length - 1;
  let m;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (nums[m] < nums[m - 1] && nums[m] < nums[m + 1]) {
      return m;
    } else if (nums[m] < nums[e]) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  return e;
}

var searchMatrix = function (matrix, target) {
  let s = 0;
  let e = matrix.length * matrix[0].length - 1;
  let m;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    let [row, col] = convertToRowAndCol(m, matrix[0].length);
    if (matrix[row][col] > target) e = m - 1;
    else if (matrix[row][col] < target) s = m + 1;
    else return true;
  }
  return false;
};

function convertToRowAndCol(n, cSize) {
  if (n === 0) return [0, 0];
  let result = Math.floor(n / cSize);
  let row = n % cSize !== 0 ? result : result;
  let col = n % cSize !== 0 ? (n % cSize) - 1 : cSize - 1;
  return [row, col];
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    34
  )
);

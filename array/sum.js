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

// I did a simple mistake into the sort function that blow my 15 minutes away from me.
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let a = 0,
    b,
    c;
  let closest = target - nums[0] + nums[1] + nums[nums.length - 1];
  let result = nums[0] + nums[1] + nums[nums.length - 1];
  while (a < nums.length - 2) {
    let sum = 0;
    b = a + 1;
    c = nums.length - 1;
    while (b < c) {
      sum = nums[a] + nums[b] + nums[c];

      let diff = Math.abs(target - sum);

      if (sum > target) {
        c--;
      } else if (sum < target) {
        b++;
      } else {
        return sum;
      }
      if (diff < closest) {
        closest = diff;
        result = sum;
      }
    }
    a++;
  }
  return result;
};
// var threeSumClosest = function (nums, target) {
//   let result = nums[0] + nums[1] + nums[nums.length - 1];
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 2; i++) {
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       const subTotal = nums[left] + nums[right] + nums[i];

//       if (subTotal == target) {
//         return subTotal;
//       } else if (subTotal < target) {
//         left++;
//       } else {
//         right--;
//       }

//       if (Math.abs(subTotal - target) < Math.abs(result - target)) {
//         result = subTotal;
//       }
//     }
//   }
//   return result;
// };

var fourSum = function (nums, target) {
  let result = [];
  nums.sort((a, b) => a - b);
  let x = 0;
  while (x < nums.length - 3) {
    let a = x + 1;
    while (a < nums.length - 2) {
      let b = a + 1;
      let c = nums.length - 1;
      while (b < c) {
        if (nums[x] + nums[a] + nums[b] + nums[c] > target) {
          c--;
        } else {
          if (nums[x] + nums[a] + nums[b] + nums[c] === target) {
            result.push([nums[x], nums[a], nums[b], nums[c]]);
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
    while (nums[x] === nums[x + 1] && x < nums.length) {
      x++;
    }
    x++;
  }
  return result;
};

var removeElement = function (nums, val) {
  let i = 0;
  let p = 0;
  while (p < nums.length) {
    if (nums[p] === val) {
      while (nums[p] === val) {
        p++;
        if (p >= nums.length) {
          return i;
        }
      }
    }
    nums[i] = nums[p];
    i++;
    p++;
  }
  return i;
};

console.log(removeElement([2], 3));

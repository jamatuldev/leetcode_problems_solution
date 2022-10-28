var subarrayGCD = function (nums, k) {
  let count = 0;
  let isGcd = false;
  let i = 0;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    p = i;
    current = [];
    while (p < nums.length) {
      if (nums[p] % k == 0) {
        current.push(nums[p]);
      } else {
        current = [];
      }
      if (nums[p] === k) {
        if (!map[nums[p]]?.filter((val) => val !== p)) {
          count++;
        }

        if (map[nums[p]]) map[nums[p]].push(p);
        else map[nums[p]] = [p];
      }
      if (current.length > 1) {
        let gcdValue = findGCD(current);
        if (gcdValue === k) {
          if (!map[String(current)]?.filter((val) => val !== p)) {
            count++;
          }

          if (map[String(current)]) map[String(current)].push(p);
          else map[String(current)] = [p];
        }
      }

      p++;
    }
  }

  return count;
};

// Function to find gcd of array
// of numbers
function findGCD(arr, n) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = gcd(arr[i], result);

    if (result == 1) {
      return 1;
    }
  }
  return result;
}

var gcd = (num1, num2) => {
  //Loop till both numbers are not equal
  while (num1 != num2) {
    //check if num1 > num2
    if (num1 > num2) {
      //Subtract num2 from num1
      num1 = num1 - num2;
    } else {
      //Subtract num1 from num2
      num2 = num2 - num1;
    }
  }

  return num2;
};

console.log(String([2, 3, 4]) === "2,3,4");

console.log(subarrayGCD([3, 12, 9, 6], 3));

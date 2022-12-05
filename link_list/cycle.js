// Still has the solution but not clean thinking
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

var detectCycle = function (head) {
  let length = lengthOfCycle(head);
  let to = head;
  let from = head;
  while (length > 0) {
    from = from.next;
    length--;
  }
  while (from !== to) {
    from = from.next;
    to = to.next;
  }
  return to;
};

var lengthOfCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let length = 1;
      let next = slow.next;
      while (next !== slow) {
        length++;
        next = next.next;
      }
      return length;
    }
  }
  return -1;
};

// I didn't thought a  lot that's why got some struggle here
var isHappy = function (n) {
  let s = n;
  let f = n;
  do {
    s = digitSquareSum(s);
    f = digitSquareSum(digitSquareSum(f));
  } while (f !== s);
  if (s === 1) return true;
  else return false;
};

function digitSquareSum(n) {
  let sum = 0;
  let divider = 10;
  while (n > 0) {
    let digit = n % divider;
    sum += digit * digit;
    n = Math.floor(n / divider);
  }
  return sum;
}
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

var reverseList = function (head) {};

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next ? next : null;
  }
}

class LinkedList {
  constructor(array) {
    this.head = null;
    this.tail = null;
    if (array.length === 0) return;
    let prev = new Node(array[0]);
    this.head = prev;
    for (let i = 1; i < array.length; i++) {
      let newNode = new Node(array[i]);
      prev.next = newNode;
      prev = newNode;
    }
    this.tail = prev;
  }
  getHead() {
    return this.head;
  }
  reverseList(start) {
    let reverse = (node) => {
      if (node.next === null) {
        this.head = node;
        return node;
      }
      let current = reverse(node.next);
      current.next = node;
      return node;
    };
    this.tail = reverse(start);
    tail.next = null;
    return start;
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.val + "--->";
      current = current.next;
    }
    console.log(this.head);
    console.log(result);
    console.log(this.tail);
  }
  reverse(times) {
    let t = times;
    let tail = this.head;
    let current = this.head;
    let prev = null;
    let next;
    while (times > 0 && current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      times--;
    }
    // if (!current) {
    //   return reverse(prev, t - times);
    // }
    return {
      head: prev,
      next: current,
      tail,
    };
  }
}

var reverseList = function (head) {
  let prev = null;
  let current = head;
  let next;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// World is nothing so hard
// I tried and failed and then again tried and failed and again tried
var isPalindrome = function (head) {
  // find the previous mid
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse after the previous mid

  prev = null;
  let current = slow;
  let next;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  let secondListHead = prev;
  // take two pointer and start checking
  while (head !== null && secondListHead !== null) {
    if (head.val !== secondListHead.val) break;
    head = head.next;
    secondListHead = secondListHead.next;
  }
  // reverse the list again to get back into the same shape it was before
  prev = null;
  current = slow;
  next;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // return the result
  if (head === null || secondListHead === null) return true;
  return false;
};

let list = new LinkedList([5, 1]);

console.log(list.reverse(5));

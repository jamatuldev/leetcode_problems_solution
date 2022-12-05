class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
let node = new ListNode(1, new ListNode(1, new ListNode(2, null)));

// This solution has a error and too verbose
// var deleteDuplicates = function (head) {
//   let current = head;
//   while (current.next && current) {
//     let validCurrent = current;
//     while (current.next.val === current.val) {
//       current = current.next;
//     }
//     validCurrent.next = current.next;
//     current = current.next;
//   }
//   return head;
// };

var deleteDuplicates = function (head) {
  let current = head;
  while (current.next) {
    if (current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

// It was really hard for me to figure out how to do the merging in the single pass without any other linkedlist
// I am struggling with the reference system of the linkedList
var mergeTwoLists = function (list1, list2) {
  let merged = new ListNode();
  let dummy = merged;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      merged.next = list2;
      list2 = list2.next;
      merged = merged.next;
    } else if (list1.val <= list2.val) {
      merged.next = list1;
      list1 = list1.next;
      merged = merged.next;
    }
  }
  merged.next = list1 !== null ? list1 : list2;
  return dummy.next;
};

var sortList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let midIdx = middleIdx(head);
  let middle = middleNode(head);
  let leftList = split(head, midIdx);
  let left = sortList(leftList);
  let right = sortList(middle);
  return mergeTwoLists(left, right);
};

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
var middleNode = function (head) {
  //   let midPrev = null

  //   while(head !== null && head.next !== null){
  //       midPrev = midPrev === null ? head : midPrev.next;
  //       head = head.next.next;
  //   }
  //   return midPrev.next;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
var middleIdx = function (head) {
  let midPrev = null;
  let mid = -1;
  while (head !== null && head.next !== null) {
    midPrev = midPrev === null ? head : midPrev.next;
    head = head.next.next;
    mid++;
  }
  if (mid === -1) return 0;
  return mid;
};

function split(head, end) {
  let current = head;
  while (end > 0) {
    current = current.next;
    end--;
  }
  current.next = null;
  return head;
}

var sortList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let prev = null,
    slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  let left = sortList(head);
  let right = sortList(slow);
  return mergeTwoLists(left, right);
};

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

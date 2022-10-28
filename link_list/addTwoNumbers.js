/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sumList = new ListNode();
  let p = sumList;
  let p1 = l1;
  let p2 = l2;
  let c = 0;
  while (p1 && p2) {
    let val = (p1.val + p2.val + c) % 10;
    c = Math.floor((p1.val + p2.val + c) / 10);
    let summedNode = new ListNode(val);
    p.next = summedNode;
    p1 = p1.next;
    p2 = p2.next;
    p = p.next;
  }
  while (!p1) {
    let val = (p1.val + c) % 10;
    c = Math.floor((p1.val + c) / 10);
    let summedNode = new ListNode(val);
    p.next = summedNode;
    p1 = p1.next;
    p = p.next;
  }
  while (!p2) {
    let val = (p2.val + c) % 10;
    c = Math.floor((p2.val + c) / 10);
    let summedNode = new ListNode(val);
    p.next = summedNode;
    p2 = p2.next;
    p = p.next;
  }
  return sumList.next;
};

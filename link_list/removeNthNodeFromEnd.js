/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let i = 0;
  let current = head;
  while (current) {
    current = current.next;
    i++;
  }
  let j = 0;
  let prev = null;
  current = head;
  if (n === i) {
    head = head.next;
    return head;
  }
  while (current) {
    if (j === i - n) {
      prev.next = current.next;
      current.next = null;
      return head;
    }
    prev = current;
    current = current.next;
    j++;
  }
};

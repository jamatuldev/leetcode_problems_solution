var swapPairs = function (head) {
  // need a loop to move through every single element
  if (head === null) return null;
  if (head.next === null) return head;
  let dummyHead = head.next;
  let previousHead = null;
  let current = head;
  while (current && current.next) {
    // pointers
    let first = current;
    let next = first.next;
    let remaining = next.next;

    // swap
    first.next = remaining;
    next.next = first;

    // adjust previous head
    if (previousHead) previousHead.next = next;
    previousHead = first;

    // move pointer
    current = current.next;
  }
  return dummyHead;
};

// It's must more efficient than mine

// class Solution {
//     public void swap (ListNode a , ListNode b) {
//         if(a==null || b==null)
//             return;
//         int temp = a.val;
//         a.val = b.val;
//         b.val = temp;
//     }

//     public ListNode swapPairs(ListNode head) {
//         if (head == null || head.next == null) {
//             return head;
//         }

//         ListNode odd = head;
//         ListNode even = head.next;

//         while (even != null && (even.next != null && odd.next != null)) {
//             swap(even, odd);
//             even = even.next.next;
//             odd = odd.next.next;

//         }

//         swap(even,odd);
//         return head;
//     }
// }

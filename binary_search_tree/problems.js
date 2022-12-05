// Is the tree is a valid binary search tree?
var isValidBST = function (root) {
  function valid(node, leftBound, rightBound) {
    if (!node) return true;
    let bound = node.val > leftBound && node.val < rightBound;
    if (!bound) return false;
    return (
      valid(node.left, leftBound, node.val) &&
      valid(node.right, node.val, rightBound)
    );
  }
  return valid(root, -Infinity, Infinity);
};

// There is a mistakenly swap happens in a binary search tree , now solve it
var recoverTree = function (root) {
  let first = null,
    middle = null,
    last = null;
  let prev = new TreeNode(-Infinity);
  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    if (prev.val > node.val) {
      if (!first) {
        first = prev;
        middle = node;
      } else {
        last = node;
      }
    }
    prev = node;
    inOrder(node.right);
  }
  inOrder(root);
  if (first && last) {
    let temp = first.val;
    first.val = last.val;
    last.val = temp;
  } else if (first && middle) {
    let temp = first.val;
    first.val = middle.val;
    middle.val = temp;
  }
};

// Convert sorted array to binary search tree
var sortedArrayToBST = function (nums) {
  function helper(l, r) {
    if (l > r) return null;
    let m = Math.floor((l + r) / 2);
    let root = new TreeNode(nums[m]);
    root.left = helper(l, m - 1);
    root.right = helper(m + 1, r);
    return root;
  }
  return helper(0, nums.length - 1);
};

// Convert a linked list into binary Search tree
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  function helper(head) {
    if (head === null) return null;
    let prev = null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    let root = new TreeNode(slow.val);
    if (!prev) {
      root.left = null;
      root.right = null;
      return root;
    }
    prev.next = null;

    root.left = helper(head);
    root.right = helper(slow.next);
    return root;
  }
  return helper(head);
};

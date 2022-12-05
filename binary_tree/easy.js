var isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var isSymmetric = function (root) {
  let queue = [root];
  while (queue.length) {
    let level = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      level.push(node);
      node && queue.push(node.left);
      node && queue.push(node.right);
    }
    if (level.length) {
      let left = 0,
        right = level.length - 1;
      while (left <= right) {
        let leftValue = level[left] ? level[left].val : null;
        let rightValue = level[right] ? level[right].val : null;
        if (leftValue !== rightValue) return false;
        left++, right--;
      }
    }
  }
  return true;
};
var maxDepth = function (root) {
  if (!root) return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return 1 + Math.max(left, right);
};
var isBalanced = function (root) {
  function dfs(root) {
    if (!root) return [true, 0];
    let left = dfs(root.left);
    let right = dfs(root.right);
    let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
    return [balanced, 1 + Math.max(left[1], right[1])];
  }
  return dfs(root)[0];
};

var countNodes = function (root) {
  let count = 0;
  function dfs(node) {
    node && count++;
    node && dfs(node.left);
    node && dfs(node.right);
  }
  dfs(root);
  return count;
};

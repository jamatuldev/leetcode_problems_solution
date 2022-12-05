var pathSum = function (root, targetSum) {
  if (!root) return [];
  let res = [];
  function helper(node, pathSum, pathsVal) {
    if (!node) return;
    if (!node.left && !node.right) {
      pathSum === targetSum && res.push(pathsVal);
      return;
    }
    if (node.left) {
      let currentPathSum = pathSum + node.left.val;
      let newPathsVal = [...pathsVal];
      newPathsVal.push(node.left.val);
      helper(node.left, currentPathSum, newPathsVal);
    }
    if (node.right) {
      let currentPathSum = pathSum + node.right.val;
      let newPathsVal = [...pathsVal];
      newPathsVal.push(node.right.val);
      helper(node.right, currentPathSum, newPathsVal);
    }
  }
  helper(root, root.val, [root.val]);
  return res;
};

var connect = function (root) {
  let queue = [root];
  while (queue.length) {
    let level = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node) {
        level.push(node);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
    if (level.length) {
      for (let i = 0; i < level.length; i++) {
        if (level[i + 1]) {
          level[i].next = level[i + 1];
        } else {
          level[i].next = null;
        }
      }
    }
  }
  return root;
};

var sumNumbers = function (root) {
  let total = 0;
  function helper(node, pathValue) {
    if (!node) return;
    if (!node.left && !node.right) {
      total += pathValue;
      return;
    }
    node.left && helper(node.left, pathValue * 10 + node.left.val);
    node.right && helper(node.right, pathValue * 10 + node.right.val);
  }
  helper(root, root.val);
  return total;
};

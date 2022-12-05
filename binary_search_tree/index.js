class Node {
  constructor(val, left, right, height) {
    this.val = val ? val : 0;
    this.left = left ? left : null;
    this.right = right ? right : null;
    this.height = height ? height : 0;
  }
}

module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return newNode;
    }
    let current = this.root;
    while (current) {
      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return newNode;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return newNode;
        }
      }
    }
    return newNode;
  }
  find(val) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    while (current) {
      if (val > current.val) {
        current = current.right;
      } else if (val < current.val) {
        current = current.left;
      } else {
        return current;
      }
    }
    return false;
  }

  bfs() {
    let queue = [this.root];
    let result = [];
    let node = queue.shift();
    while (node) {
      result.push(node);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      node = queue.shift();
    }
    return result;
  }
  dfsPreOrder() {
    function dfs(node) {
      console.log(node);
      node.left && dfs(node.left);
      node.right && dfs(node.right);
    }
    dfs(this.root);
  }
  isBalanced(root) {
    function dfs(root) {
      if (!root) return [true, 0];
      let left = dfs(root.left);
      let right = dfs(root.right);
      let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
      return [balanced, 1 + Math.max(left[1], right[1])];
    }
    return dfs(root)[0];
  }
};

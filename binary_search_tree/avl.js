let BinarySearchTree = require("./index");

class AVLTree extends BinarySearchTree {
  constructor() {
    super();
  }
  insert(val) {
    let node = super.insert(val);
    this.updateHeight(node);
    return this.rebalance(node);
  }

  height(node) {
    return node !== null ? node.height : -1;
  }
  updateHeight(node) {
    let leftChildHeight = this.height(node.left);
    let rightChildHeight = this.height(node.right);
    node.height = Math.max(leftChildHeight, rightChildHeight) + 1;
  }
  balanceFactor(node) {
    return this.height(node.right) - this.height(node.left);
  }
  rotateRight(node) {
    leftChild = node.left;
    node.left = leftChild.right;
    this.updateHeight(node);
    this.updateHeight(leftChild);
    return leftChild;
  }
  rotateLeft(node) {
    rightChild = node.right;
    node.right = rightChild.left;
    rightChild.left = node;
    this.updateHeight(node);
    this.updateHeight(rightChild);
  }

  rebalance(node) {
    let balanceFactor = this.balanceFactor(node);
    if (balanceFactor < -1) {
      if (this.balanceFactor(node.left) <= 0) {
        // Case 1
        // Rotate right
        node = this.rotateRight(node);
      } else {
        // Case 2
        // Rotate left-right
        node.left = this.rotateLeft(node.left);
        node = this.rotateRight(node);
      }
    }

    // Right-heavy?
    if (balanceFactor > 1) {
      if (this.balanceFactor(node.right) >= 0) {
        // Case 3
        // Rotate left
        node = this.rotateLeft(node);
      } else {
        // Case 4
        // Rotate right-left
        node.right = this.rotateRight(node.right);
        node = this.rotateLeft(node);
      }
    }

    return node;
  }
}
console.log("Is ist worki");
let tree = new AVLTree();
tree.insert(10);
tree.insert(9);
tree.insert(8);
tree.insert(11);

console.log(tree.root);

var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};

var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;
  let root = new TreeNode(postorder.pop());
  let mid = inorder.indexOf(root.val);
  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
  root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid));
  return root;
};

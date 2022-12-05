var levelOrder = function (root) {
  let queue = [root];
  let result = [];
  while (queue.length) {
    let level = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      console.log(node);
      if (node) {
        level.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (level.length) result.push(level);
  }
  return result;
};

var zigzagLevelOrder = function (root) {
  let queue = [root];
  let results = [];
  let fromLeft = true;
  while (queue.length) {
    let level = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (level.length) {
      if (!fromLeft) {
        for (let j = level.length - 1, i = 0; i < j; i++, j--) {
          let temp = level[i];
          level[i] = level[j];
          level[j] = temp;
        }
      }
      results.push(level);
      fromLeft = !fromLeft;
    }
  }
  return results;
};

var levelOrderBottom = function (root) {
  let queue = [root];
  let results = [];
  while (queue.length) {
    let level = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (level.length) results.push(level);
  }
  for (let i = 0, j = results.length - 1; i < j; i++, j--) {
    let temp = results[i];
    results[i] = results[j];
    results[j] = temp;
  }
  return results;
};

function test(level) {
  for (let j = level.length - 1; j > 0; j--) {
    let temp = level[j];
    level[j] = level[j - 1];
    level[j - 1] = temp;
  }
  return level;
}

console.log(test([8, 7, 92, 3, 2, 3]));

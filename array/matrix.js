// did some terrible mistakes here, forget to give [][] then -1 costs me 3 submission includes edge cases n

var isToeplitzMatrix = function (matrix) {
  let row = 0;
  let col = 0;
  if (matrix[0].length === 1) return true;
  while (row < matrix.length) {
    let pR = row;
    let pC = col;
    while (pR < matrix.length - 1 && pC < matrix[0].length - 1) {
      if (matrix[pR][pC] !== matrix[pR + 1][pC + 1]) return false;
      pR++;
      pC++;
    }
    row++;
  }
  row = 0;
  col = 1;
  while (col < matrix[0].length) {
    let pR = row;
    let pC = col;
    while (pR < matrix.length - 1 && pC < matrix[0].length - 1) {
      if (matrix[pR][pC] !== matrix[pR + 1][pC + 1]) return false;
      pR++;
      pC++;
    }
    col++;
  }
  return true;
};

console.log(
  isToeplitzMatrix([
    [97, 97],
    [80, 97],
    [10, 80],
  ])
);

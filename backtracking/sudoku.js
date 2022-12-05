/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  function solve(board) {
    let leftEmptyCell = true;
    let r = -1,
      c = -1;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === ".") {
          r = i;
          c = j;
          leftEmptyCell = false;
          break;
        }
      }
      if (!leftEmptyCell) break;
    }
    if (leftEmptyCell) return true;
    for (let i = 1; i <= board.length; i++) {
      if (isValid(board, String(i), r, c)) {
        board[r][c] = String(i);
        if (solve(board)) {
          return true;
        } else {
          board[r][c] = ".";
        }
      }
    }
    return false;
  }
  solve(board);
  return board;
};

function isValid(board, value, row, col) {
  // check at the row and col level
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === value && i !== col) return false;
    if (board[i][col] === value && i !== row) return false;
  }

  // check at the subBlocks
  let startRow = row - (row % 3);
  let startCol = col - (col % 3);

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (value === board[i][j] && i !== row && j !== col) return false;
    }
  }

  return true;
}

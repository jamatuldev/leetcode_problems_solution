/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [];
  let board = [];
  let boardRow = [];
  for (let i = 0; i < n; i++) {
    boardRow.push(false);
  }
  for (let i = 0; i < n; i++) {
    board.push([...boardRow]);
  }
  function NQueens(board, row) {
    if (row === board.length) {
      let strBoard = [];
      for (let i = 0; i < board.length; i++) {
        let str = "";
        for (let j = 0; j < board.length; j++) {
          if (board[i][j] === false) str += ".";
          else str += "Q";
        }
        strBoard.push(str);
      }
      res.push(strBoard);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (isSafe(board, row, i)) {
        board[row][i] = true;
        NQueens(board, row + 1);
        board[row][i] = false;
      }
    }
  }
  NQueens(board, 0);
  return res;
};

function isSafe(board, row, col) {
  // check at straight line
  for (let i = row - 1; i >= 0; i--) {
    if (board[i][col] === true) return false;
  }

  // check at left diagonal line
  let maxLeft = Math.min(row, col);
  for (let i = 1; i <= maxLeft; i++) {
    if (board[row - i][col - i] === true) return false;
  }

  // check at right diagonal line
  let maxRight = Math.min(row, board[0].length - 1 - col);
  for (let i = 1; i <= maxRight; i++) {
    if (board[row - i][col + i] === true) return false;
  }

  return true;
}

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let board = [];
  let boardRow = [];
  for (let i = 0; i < n; i++) {
    boardRow.push(false);
  }
  for (let i = 0; i < n; i++) {
    board.push([...boardRow]);
  }
  function NQueens(board, row) {
    if (row === board.length) {
      return 1;
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (isSafe(board, row, i)) {
        board[row][i] = true;
        count += NQueens(board, row + 1);
        board[row][i] = false;
      }
    }
    return count;
  }
  return NQueens(board, 0);
};

function isSafe(board, row, col) {
  // check at straight line
  for (let i = row - 1; i >= 0; i--) {
    if (board[i][col] === true) return false;
  }

  // check at left diagonal line
  let maxLeft = Math.min(row, col);
  for (let i = 1; i <= maxLeft; i++) {
    if (board[row - i][col - i] === true) return false;
  }

  // check at right diagonal line
  let maxRight = Math.min(row, board[0].length - 1 - col);
  for (let i = 1; i <= maxRight; i++) {
    if (board[row - i][col + i] === true) return false;
  }

  return true;
}

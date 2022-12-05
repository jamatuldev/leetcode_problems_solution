var convert = function (s, numRows) {
  let zigzag = "";
  // zigzag matrix initialization
  let zigzagMatrix = [];
  for (let i = 0; i < numRows; i++) {
    zigzagMatrix.push([]);
  }
  // contruct the zigzag matrix
  let letterPointer = 0;

  while (letterPointer < s.length) {
    // build the forward row
    let row = 0;
    while (row < numRows && letterPointer < s.length) {
      zigzagMatrix[row].push(s[letterPointer]);
      letterPointer++;
      row++;
    }
    row -= 2;
    zigzagMatrix[0].push("-");
    zigzagMatrix[numRows - 1].push("-");
    // build the backward row
    while (row > 0 && letterPointer < s.length) {
      zigzagMatrix[row].push(s[letterPointer]);
      letterPointer++;
      row--;
    }
  }

  // contrcut the string from the zigzag matrix
  for (let i = 0; i < zigzagMatrix.length; i++) {
    for (let j = 0; j < zigzagMatrix[i].length; j++) {
      if (zigzagMatrix[i][j] && zigzagMatrix[i][j] !== "-") {
        zigzag += zigzagMatrix[i][j];
      }
    }
  }
  return zigzag;
};
console.log(convert("abcdcdf", 3));

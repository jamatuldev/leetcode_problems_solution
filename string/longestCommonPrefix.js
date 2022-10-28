var longestCommonPrefix = function (strs) {
  let common = strs[0];
  if (common === "") return "";
  for (let i = 1; i < strs.length; i++) {
    let prefix = "";
    for (let j = 0; j < strs[i].length; j++) {
      if (common[j] === strs[i][j]) {
        prefix += common[j];
      } else {
        break;
      }
    }
    if (prefix === "") return "";
    common = prefix;
  }
  return common;
};

console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));

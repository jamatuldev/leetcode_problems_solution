var longestPalindrome = function (s) {
  let longPalin = "";
  let i = 0;
  while (i < s.length) {
    if (longPalin.length >= s.length - i) return longPalin;
    let left = i,
      right = s.length - 1;
    while (left <= right && right - left + 1 > longPalin.length) {
      let lP = left;
      let rP = right;
      let isPalindrome = true;
      while (lP <= rP) {
        if (s[lP] !== s[rP]) {
          isPalindrome = false;
          break;
        }
        lP++, rP--;
      }
      if (isPalindrome) {
        longPalin =
          longPalin.length < right - left + 1
            ? s.slice(left, right + 1)
            : longPalin;
        break;
      }
      right--;
    }
    i++;
  }
  return longPalin;
};

console.log(longestPalindrome("a"));

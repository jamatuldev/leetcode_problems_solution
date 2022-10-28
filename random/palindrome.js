var isPalindrome = function (x) {
  let num = x;
  let rem,
    inverse = 0;
  while (x > 0) {
    rem = x % 10;
    x = Math.floor(x / 10);
    inverse = inverse * 10 + rem;
  }
  if (inverse === num) return true;
  return false;
};

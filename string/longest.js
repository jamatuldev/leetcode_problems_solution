var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    let current = "";
    for (let j = i; j < s.length; j++) {
      if (!isThere(s[j], current)) {
        current += s[j];
      } else {
        break;
      }
    }
    if (current.length > longest) longest = current.length;
  }
  return longest;
};

function isThere(char, string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) return true;
  }
  return false;
}

console.log(lengthOfLongestSubstring("ef"));

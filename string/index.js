var strStr = function (haystack, needle) {
  let p = 0;
  let w = 0;
  while (p < haystack.length) {
    if (haystack[p] !== needle[w]) {
      if (w > 0) {
        p = p - w + 1;
        w = 0;
      } else {
        p++;
      }
    } else {
      p++;
      w++;
      if (w === needle.length) {
        return p - needle.length;
      }
    }
  }
  return -1;
};

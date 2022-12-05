var reverseWords = function (s) {
  let final = "";
  for (let i = s.length - 1; i >= 0; i--) {
    let word = "";
    if (s[i] !== " ") {
      while (s[i] !== " " && i >= 0) {
        word = s[i] + word;
        i--;
      }
    }
    if (word) {
      let aWord = final === "" ? word + " " : word;
      final += aWord;
    }
  }
  return final;
};

console.log(reverseWords("Hello World   "));

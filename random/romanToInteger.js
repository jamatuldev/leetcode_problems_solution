/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  let keyCodes = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let key = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if ((i + 1 < s.length && s[i + 1] === "V") || s[i + 1] === "X") {
        key = s[i] + s[i + 1];
        i = i + 1;
      } else {
        key = s[i];
      }
    } else if (s[i] === "X") {
      if ((i + 1 < s.length && s[i + 1] === "L") || s[i + 1] === "C") {
        key = s[i] + s[i + 1];
        i = i + 1;
      } else {
        key = s[i];
      }
    } else if (s[i] === "C") {
      if ((i + 1 < s.length && s[i + 1] === "D") || s[i + 1] === "M") {
        key = s[i] + s[i + 1];
        i = i + 1;
      } else {
        key = s[i];
      }
    } else {
      key = s[i];
    }
    result += keyCodes[key];
    key = "";
  }
  return result;
};

var intToRoman = function (num) {
  let convert = "";
  let mapedLetters = [
    { key: "I", val: 1 },
    { key: "IV", val: 4 },
    { key: "V", val: 5 },
    { key: "IX", val: 9 },
    { key: "X", val: 10 },
    { key: "XL", val: 40 },
    { key: "L", val: 50 },
    { key: "XC", val: 90 },
    { key: "C", val: 100 },
    { key: "CD", val: 400 },
    { key: "D", val: 500 },
    { key: "CM", val: 900 },
    { key: "M", val: 1000 },
  ];
  let j = mapedLetters.length - 1;
  while (num > 0) {
    let letter;
    let lastKeyIdx;
    for (let i = j; i >= 0; i--) {
      letter = mapedLetters[i];
      let reminder = num % letter.val;
      lastKeyIdx = i;
      if (reminder < num) break;
    }
    j = lastKeyIdx;
    num = num - letter.val;
    convert += letter.key;
  }
  return convert;
};

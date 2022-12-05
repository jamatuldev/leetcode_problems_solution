var myAtoi = function (s) {
  let numString = "";
  let p = 0;
  let sign = "+";
  let digitsStr = [];
  let digits = [];
  let positiveBound = 2147483647;
  let negativeBound = -2147483648;
  let bound = String(2147483647).split("");
  // building digits array to map through string and original digits
  for (let i = 0; i <= 9; i++) {
    digitsStr.push(String(i));
    digits.push(i);
  }
  // Igonre leading whitespace
  while (s[p] === " ") {
    p++;
  }
  // check for the sign - assume positive if none of them is given
  if (s[p] === "+" || s[p] === "-") {
    sign = s[p] === "+" ? "+" : "-";
    p++;
  }
  while (s[p] === "0") {
    p++;
  }
  // read the character until no digit character found or end of the string
  while (p < s.length && digitsStr.includes(s[p])) {
    numString += s[p];
    p++;
  }
  //   // clean the numString
  //   let firstDigitLoc ;
  //   for(let i = 0; numString.length - 1; i++){
  //     if(numString[i] === '0') cleanString = numString[i]
  //   }
  // convert the string in integer
  // if it is too large
  if (numString.length > 10) {
    return sign === "+" ? 2147483647 : -2147483648;
  }
  let i = numString.length - 1;
  let mul = 1;
  let sizedIsMaintained = true;
  let answer = 0;
  while (i >= 0) {
    let digitChar = numString[i];
    let pos = digitsStr.indexOf(digitChar);
    let digit = digits[pos];
    if (digit > bound[i]) sizedIsMaintained = false;
    else if (digit < bound[i]) sizedIsMaintained = true;
    // to avoid adding value which will overflow in 32bit regi
    if (!sizedIsMaintained && mul === 1000000000) break;
    answer = answer + digit * mul;
    mul *= 10;
    i--;
  }
  // special case : where length of the
  if (numString.length === 10) {
    if (!sizedIsMaintained) {
      if (sign === "+") return positiveBound;
      return negativeBound;
    }
  }
  if (sign === "+") return answer;
  return -answer;
};

// My code contain a lot of verbose stuff
// class Solution(object):
//     def myAtoi(self, s):
//         """
//         :type str: str
//         :rtype: int
//         """
//         ###better to do strip before sanity check (although 8ms slower):
//         #ls = list(s.strip())
//         #if len(ls) == 0 : return 0
//         if len(s) == 0 : return 0
//         ls = list(s.strip())

//         sign = -1 if ls[0] == '-' else 1
//         if ls[0] in ['-','+'] : del ls[0]
//         ret, i = 0, 0
//         while i < len(ls) and ls[i].isdigit() :
//             ret = ret*10 + ord(ls[i]) - ord('0')
//             i += 1
//         return max(-2**31, min(sign * ret,2**31-1))

// Signing logic is wonderful

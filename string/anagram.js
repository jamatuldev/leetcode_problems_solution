var groupAnagrams = function (strs) {
  let anagramMap = new Map();
  let groupedAnagrams = [];
  for (let i = 0; i < strs.length; i++) {
    let sortedWord = strs[i].split("").sort().join("");
    if (anagramMap.has(sortedWord)) {
      let words = anagramMap.get(sortedWord);
      words.push(strs[i]);
      anagramMap.set(sortedWord, words);
    } else {
      anagramMap.set(sortedWord, [strs[i]]);
    }
  }

  for (let [key, values] of anagramMap) {
    groupedAnagrams.push(values);
  }
  return groupedAnagrams;
};

console.log(groupAnagrams(["a", "a", "c"]));

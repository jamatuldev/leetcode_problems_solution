var oddString = function (words) {
  let firstArray;
  let frequency = {};
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let diffArray = [];
    for (let j = 0; j < words[i].length - 1; j++) {
      let diff = 0;
      let first = 97 - words[i][j + 1].charCodeAt(0);
      let second = 97 - words[i][j].charCodeAt(0);
      diff += second - first;
      diffArray.push(diff);
    }
    if (!frequency[diffArray]) {
      frequency[diffArray] = [words[i]];
    } else {
      frequency[diffArray].push(words[i]);
    }
  }
  for (let key in frequency) {
    if (frequency[key].length === 1) {
      return frequency[key][0];
    }
  }
};

var twoEditWords = function (queries, dictionary) {
  let results = [];
  for (let i = 0; i < queries.length; i++) {
    let word;

    for (let j = 0; j < dictionary.length; j++) {
      let diff = 0;
      for (let k = 0; k < dictionary[j].length; k++) {
        if (queries[i][k] !== dictionary[j][k]) {
          diff++;
        }
      }
      if (diff <= 2) {
        word = queries[i];
        break;
      }
    }
    if (word) results.push(word);
  }
  return results;
};

var secondGreaterElement = function (nums) {
  let results = [];
  let e = 0;
  let p = 1;
  let count = 0;
  while (p < nums.length) {
    if (nums[e] < nums[p]) {
      count++;
    }
    if (count === 2) {
      results.push(nums[p]);
      count = 1;
      e++;
    }
    p++;
  }
  return results;
};

var averageValue = function (nums) {
  let sum = 0;
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
      sum += nums[i];
      n++;
    }
  }
  if (n !== 0) return Math.round(sum / n);
  return 0;
};

var mostPopularCreator = function (creators, ids, views) {
  let data = {};
  let mostPopular = [];
  for (let i = 0; i < creators.length; i++) {
    if (data[creators[i]]) {
      let prev = data[creators[i]];
      let obj = {};
      let totalViews = prev.totalViews + views[i];
      if (prev.mostViewedVideoView < views[i]) {
        data[creators[i]].mostViewedVideo = [];
        data[creators[i]].mostViewedVideo.push(ids[i]);
        data[creators[i]].mostViewedVideoView = views[i];
      } else if (prev.mostViewedVideoView === views[i]) {
        data[creators[i]].mostViewedVideo.push(ids[i]);
        data[creators[i]].mostViewedVideoView = views[i];
      }
      data[creators[i]].totalViews = totalViews;
    } else {
      let obj = {};
      obj.totalViews = views[i];
      obj.mostViewedVideo = [ids[i]];
      obj.mostViewedVideoView = views[i];
      data[creators[i]] = obj;
    }
  }
  let max = -Infinity;
  for (let key in data) {
    if (data[key].totalViews > max) {
      mostPopular = [];
      data[key].mostViewedVideo.sort();
      mostPopular.push([key, data[key].mostViewedVideo[0]]);
      max = data[key].totalViews;
    } else if (data[key].totalViews === max) {
      data[key].mostViewedVideo.sort();
      mostPopular.push([key, data[key].mostViewedVideo[0]]);
    }
  }
  return mostPopular;
};

var makeIntegerBeautiful = function (n, target) {
  let sum = digitSum(n);
  if (sum <= target) return 0;
  let divisor = 10;
  while (true) {
    let leftValue = Math.floor(n / divisor);
    let newValue = (leftValue + 1) * divisor;
    if (digitSum(newValue) <= target) {
      return newValue - n;
    }
    divisor *= 10;
  }
};

function digitSum(num) {
  let rem,
    sum = 0;
  while (num) {
    rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(makeIntegerBeautiful(16, 7));

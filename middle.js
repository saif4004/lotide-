const middle = function(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  if (arr.length >= 0 && arr.length <= 2) {
    return [];
  }
  let midArr = [];
  if (arr.length % 2 !== 0) {
    midArr[0] = arr[Math.floor(arr.length / 2)];
    return midArr;
  } else {
    midArr[0] = arr[Math.floor(arr.length / 2) - 1];
    midArr[1] = arr[Math.floor(arr.length / 2)];
    return midArr;
  }
};

module.exports = middle;

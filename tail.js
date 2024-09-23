// FUNCTION IMPLEMENTATION

const tail = function(arr) {
  let tempArry = [];
  if (!Array.isArray(arr)) {
    return undefined;
  }
  if (arr.length >= 0 && arr.length <= 1) {
    return tempArry;
  }

  for (let i = 1; i < arr.length; i++) {
    tempArry[i] = arr[i];
  }
 
  return tempArry;
};

module.exports = tail;
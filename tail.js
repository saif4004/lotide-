// FUNCTION IMPLEMENTATION

const tail = function(arr) {
  let tempArry = [];
  if (!Array.isArray(arr)) {
    return undefined;
  }
  if (arr.length >= 0 && arr.length <= 1) {
    return tempArry;
  }

 tempArry = arr.slice(1);
 
  return tempArry;
};

module.exports = tail;
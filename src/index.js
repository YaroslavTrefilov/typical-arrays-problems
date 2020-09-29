
exports.min = function min (array) {
  if ((array === undefined) || (array.length === 0 )) {
    return 0;
  } else {
  let sortedArray = array.sort(function(a, b) {
      return a - b;
  })
  return sortedArray[0];
  }
}










exports.max = function max (array) {
  if ((array === undefined) || (array.length === 0 )) {
    return 0;
  } else {
  let sortedArray = array.sort(function(a, b) {
      return a - b;
  })
  return sortedArray[array.length - 1];
  }
}

exports.avg = function avg (array) {
  if ((array === undefined) || (array.length === 0 )) {
    return 0;
  } else {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let result = array.reduce(reducer);
    result /= array.length;
    return result
  }
}

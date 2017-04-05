/**
@summary recursive function that takes an array that may contain one or more arrays within that particular array. Function removes all instances of the nested arrays. Uses a recursive call stack to keep the order of the array.
@param {Array} nestedArray
@returns {Array} flatten array without any arbitrarily-deep nested Array-like structure
*/
const flatten = (nestedArray, flattenStack = []) => {
  if (nestedArray.length === 0) return flattenStack;
  // if the first element in the array equates to an array call the function again
  if (Array.isArray(nestedArray[0])) {
    return flatten(nestedArray.slice(1), flattenStack.concat(flatten(nestedArray[0])));
  } else {
    return flatten(nestedArray.slice(1), flattenStack.concat(nestedArray[0]));
  }
}
/**
@param {Array}
@returns {Array} array without any "null" present
*/
const removeNulls = array => array.filter(element => element !== null);

removeNulls(flatten([0, 2, [[2, 3], 8, 100, null, [[null]]], -2]))

module.exports = {
  flatten,
  removeNulls
};

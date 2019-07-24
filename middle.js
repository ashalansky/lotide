const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArray(actual, expected)) {
   console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
   console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
      let firstMiddle = array[Math.floor(array.length / 2) -1];
      let secondMiddle = array[Math.floor(array.length / 2)];
        return [firstMiddle, secondMiddle];
  } else {
    let middle = array[Math.floor(array.length / 2)];
    return [middle]
  }
};

console.log(middle([1,2,3,4,5]));

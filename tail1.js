const assertEqual = require('./assertEqual');
const array = [1,2,3];
const tail = function(array) {
  if (array.length > 1) {
    console.log(array.slice(1));
  } else {
    return [];
  }
}
tail(array);
// assertEqual(tail([1]));

module.exports = tail;

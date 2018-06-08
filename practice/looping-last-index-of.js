// function lastIndexOf(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     var targetArray = [];
//     if (array.length = 0) { // non-empty array
//       return -1;
//     } else { // empty array
//       if (array[i] = target) {
//         targetArray[i] = target;
//       }
//     }
//     return targetArray.length;
//   }
// }

function lastIndexOf(array, target) {
  var position; // temporary index counter
  var match = false; // flag if there is a match
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) { // target is found in array
      match = true; // flag for target match
      position = i; // index of target, updated with latest value
    }
  }
  if (match) { // if target is found
    return position; // return last index of target
  } else { // if no target found
    return -1;
  }
}

// testing
console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
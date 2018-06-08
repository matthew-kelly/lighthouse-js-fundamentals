function range(start, end, step) {
  var first = start;
  var last = end;
  var add = step;
  var output = [];
  if (start > end || step < 0 || start === undefined || end === undefined || step === undefined) {
    return output;
  } else {
    while (first <= last) {
      output.push(first);
      first += add;
    }
    return output;
  }
}

// function range(start, end, step) {
//   var first = start;
//   var last = end;
//   var add = step;
//   var output = [];
//   while (first < last) {
//     output.push(first);
//     first += add;
//   }
//   return output;
// }

// testing
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, -3));
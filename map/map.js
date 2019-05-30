function map (arr, func) {
  var newArr = [];

  for (element of arr) {
    newArr.push(func(element));
  }

  return newArr;
}

// var words = ["ground", "control", "to", "major", "tom"];

// var wordLengths = map(words, function(word) {
//   return word.length;
// });

// var upper = map(words, function(word) {
//   return word.toUpperCase();
// });

// var reversed = map(words, function(word) {
//   return word.split('').reverse().join('');
// });

// console.log(wordLengths);
// console.log(upper);
// console.log(reversed);

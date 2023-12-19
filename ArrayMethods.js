//array Methods

//map
//most useful for react usestate
//syntax
var new_array = arr.map(function callback(element, index, array) {
    // Return value for new_array
}[, thisArg])

//examples

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

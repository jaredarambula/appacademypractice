/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
  let newArray = [];
  
  for(let i = 0; i < array.length; i++) {
    let num = array[i];
    newArray.push(num * 3)
  }
    return newArray;
  }



/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = tripler;
/*
make a function that takes in an array of values, only add up the odd numbers and filter out the non numbers in the given input array=
addOdds(["hello", true, 1, 5, false, 20, 21];);
*/

function addOdds(numArray) {
  let result = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (typeof numArray[i] === "number") {
      if (numArray[i] % 2 !== 0) {
        result += numArray[i];
      }
    }
  }
  return result;
}
addOdds(["hello", true, 1, 5, false, 20, 21]);

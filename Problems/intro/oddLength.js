//write a function when given a string in the parameter, return even or odd based on the string's length
function isItOdd(str) {
  if (str.length % 2 === 0) {
    return "even";
  }
    return "odd";

}

let output = isItOdd("special");
console.log(output);

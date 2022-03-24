//write a function when given a string in the parameter, return even or odd based on the string's length
function isItOdd(str) {
    if( str.length % 2 === 0){
      return "even"
    }else{
      return "odd"
    }
}

var output = isItOdd('special');
console.log(output);

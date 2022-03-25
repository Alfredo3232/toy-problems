/* create a function which returns an array except for the last element in that array
  Notes:
  -The array that you are returning has to be [1,2,3,4,5]
  -But must return[1,2,3,4], it must be "dynamic" meaning it must do this on any array and type of data value
*/
function NotLast(array) {
    let empty = [];
  for(var i = 0; i < array.length -1; i++){
          empty.push(array[i]);
  }
    return empty
}
var input = [1, 2, 3, 4,5,6,7];
var output = NotLast(input);
console.log(output); 

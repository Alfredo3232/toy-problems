/* write a function when given a string it return an object where each key is a word of the string and its value is how many times that word appeared in the string
  -should return an object
  - should return an empty object if the string is empty
*/
function counting(str) {
    if(str === ""){
        return {}
    }
    let obj = {};
    let split = str.split(" ");
    let appearance = 0; 
    console.log(appearance)
    for(var i = 0; i < split.length; i++){
        if(obj[split[i]] === undefined){
            obj[split[i]] = 1;
        }else{
            obj[split[i]] += 1;
        }
    }
    return obj
}
var output = counting('an eye for an eye');
console.log(output); 

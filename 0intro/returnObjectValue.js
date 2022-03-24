//Write a function when given the parameters object and key, the function should return the value of the object. 
// if there is no property called key, it should return undefined.
function example(obj, key) {
  return obj[key];
}
var obj = {
  key: 'value'
};
var last = example(obj, 'key');
console.log(last); 

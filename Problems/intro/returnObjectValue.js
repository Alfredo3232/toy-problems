//Write a function when given the parameters object and key, the function should return the value of the object.
// if there is no property called key, it should return undefined.
function example(obj, key) {
  return obj[key];
}
let obj = {
  key: "value"
};
let last = example(obj, "key");
console.log(last);

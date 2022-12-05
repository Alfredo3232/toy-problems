// write a function when given a interger it returns that number of "yes"
let result = "";
function agree(num) {
  for (let i = 0; i < num; i++) {
    result = result + "yes";
  }
  return result;
}
console.log(agree(7));

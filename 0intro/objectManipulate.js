/* create an object with the name "pencil" with the attributes(keys), "color"(color of the pencil)(string), "num"(number of pencils)(interger).
 After creating your object and filling the keys with their values then you must:
  1. change the "color" key to another color(string)
  2. delete the "num" key and its value
  3. add a new key:value named "eraser"(color of eraser)(string)
  4. console.log the object to test
 */
let pencil = {
  "color": "Yellow",
  "num": 1
}
pencil.color = "black";
delete pencil.num;
pencil.eraser = "white"
console.log(pencil)

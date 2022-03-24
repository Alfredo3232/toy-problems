/*Escriba una función llamada "edadParaBeber". Dado un número, en este caso una edad, "edadParaBeberk" devuelve si una persona tiene la edad suficiente para beber 
legalmente en Mexico. 
Notas:
La edad para beber en Mexico es 18.
*/
function edadParaBeber(edad) {
    if( edad >= 18){
        return "Si puede beber"
    }else{
        return "No puede beber"
    }
}
var final = edadParaBeber(16);
console.log(final);

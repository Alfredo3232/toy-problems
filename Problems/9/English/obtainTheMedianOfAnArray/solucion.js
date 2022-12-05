/*
  my solucion para la problema.
*/
function obtieneElPromedio(grados) {
  let len = grados.length;
  let num = 0;
  let total;
  for (let i = 0; i < grados.length; i++) {
    num += grados[i];
  }
  total = num / len;
  return Math.floor(total);
}

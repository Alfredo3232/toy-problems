function getAverage(marks){
  let len = marks.length;
  let added = 0;
  let total;
  for(var i = 0; i < marks.length; i++){
    added += marks[i]
  }
  total = added / len
  return  Math.floor(total)
}

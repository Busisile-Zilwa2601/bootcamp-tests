function fromWhere(regNum){
if(typeof(regNum) == "string"){
  if(regNum.startsWith('CY')){
    return "Bellville";}
  else if(regNum.startsWith('CJ')){
  return "Paarl";}
  else if(regNum.startsWith('CA')){
          return "Cape Town";}
  else{
  	return "Some other place!";}}
  else{
    return "Error, String is expected!"
  }
}
console.log(fromWhere('DN 1273 GP'));

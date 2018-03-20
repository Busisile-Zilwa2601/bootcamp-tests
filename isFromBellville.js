function isFromBellville(regNum){

  console.log(typeof(regNum));
  if(typeof(regNum)== "string"){
    return regNum.startsWith("CY");
  }
  else {
    return "Please input String";
  }
}

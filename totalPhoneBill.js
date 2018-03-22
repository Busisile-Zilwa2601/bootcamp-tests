function totalPhoneBill(myStr){
  const perCall = 2.75;
  const perSMS = 0.65;
  var countCalls = 0;
  var countSMS = 0;
  var totalBill = new Number(0.0);
  var myCalls = [];
  var mySMS = [];
  var myArr = myStr.split(',', myStr.length);
  for(var i = 0; i<myArr.length;i++){
  	var item = myArr[i].trim();
    if(item.startsWith('c')){
    	myCalls.push(item);
    }
    else
      	mySMS.push(item);
  }
  console.log(myCalls);
  console.log(mySMS);
  countCalls = (parseFloat(myCalls.length))*perCall;
  countSMS = (parseFloat(mySMS.length))*perSMS;
  totalBill = countCalls+countSMS;
  return "R"+(totalBill.toFixed(2));
}
console.log(totalPhoneBill("call, call, sms"));
console.log(totalPhoneBill("call, call, sms, sms, sms, sms, sms, call"));

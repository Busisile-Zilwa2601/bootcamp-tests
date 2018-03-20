function countAllPaarl(myStr){
	var myArr = myStr.split(',', myStr.length);
  	var myPaarl = 0;
  	for(var i =0; i< myArr.length; i++){
      	var plates = myArr[i].trim();
      	if(plates.startsWith('CJ')){
          	 myPaarl++;
        	}
    }
  	return myPaarl;
}

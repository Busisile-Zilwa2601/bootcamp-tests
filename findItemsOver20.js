function findItemsOver20(listOfObj){
	var myList = [];
  	for(var i = 0; i < listOfObj.length;i++){
    	var itemList = listOfObj[i];
      	if(itemList.qty > 20){
        	myList.push(itemList);
        }
    }
  	return myList;
}
var itemList = [
    {name : 'apples', qty : 20},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
console.log(findItemsOver20(itemList));

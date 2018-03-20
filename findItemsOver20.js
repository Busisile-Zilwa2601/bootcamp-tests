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
function findItemsOver(listObj, threshold){
	var myList = [];
  	for(var i = 0; i < listObj.length;i++){
    	var itemList = listObj[i];
      	if(itemList.qty > threshold){
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
console.log(findItemsOver20(itemList))
console.log(findItemsOver(itemList, 25));

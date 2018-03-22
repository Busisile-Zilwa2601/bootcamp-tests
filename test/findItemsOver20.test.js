describe("The findItemsOver20 function", function(){
  var itemList = [
      {name : 'apples', qty : 20},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3}];
      if(Array.isArray(itemList)){
        it("It should correctly return a list of objects with a qty property greater than 20", function(){
          assert.deepEqual(findItemsOver20(itemList),[{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);
        });
      }
      else {
        it("Unexpected type error:", function(){
          assert.deepEqual(findItemsOver20({name : 'apples', qty : 20}), "Unexpected type error:");
        });
      }
});

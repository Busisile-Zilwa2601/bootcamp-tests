describe("The findItemsOver20 function", function(){
  var itemList2 = [
      {name : 'apples', qty : 20},
      {name : 'pears', qty : 17},
      {name : 'bananas', qty : 7},
      {name : 'apples', qty : 3}];
  var itemList3 = [
          {name : 'apples', qty : 21},
          {name : 'pears', qty : 27},
          {name : 'bananas', qty : 37},
          {name : 'apples', qty : 33}];
        it("It should correctly return a list of objects with a qty property greater than 20", function(){
          assert.deepEqual(findItemsOver20(itemList),[{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);
        });
        it("Unexpected type error:", function(){
          assert.deepEqual(findItemsOver20({name : 'apples', qty : 20}), []);
        });
        it("There are no elements on the list", function(){
          assert.deepEqual(findItemsOver20([]), "No elements");
        });
        it("All items are less than 20", function(){
          assert.deepEqual(findItemsOver20(itemList2), [])
        });
        it("all items are over 20", function(){
          assert.deepEqual(findItemsOver20(itemList3),[{name : 'apples', qty : 21},{name : 'pears', qty : 27},{name : 'bananas', qty : 37},{name : 'apples', qty : 33}] )
        });
});

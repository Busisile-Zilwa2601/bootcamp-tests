describe("The findItemsOver function", function(){
  var itemList = [
      {name : 'apples', qty : 20},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3}];
      if(Array.isArray(itemList)){
        it("It should correctly return a list of objects with a qty property greater than 20", function(){
          assert.deepEqual(findItemsOver(itemList, 20),[{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);
        });
        it("It should correctly return a list of objects with a qty property greater than 10", function(){
          assert.deepEqual(findItemsOver(itemList, 10),[{name : 'apples', qty : 20},{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);
        });
      }
      else {
        it("Unexpected type error:", function(){
          assert.deepEqual(findItemsOver({name : 'apples', qty : 20}), "Unexpected type error:");
        });
      }
});

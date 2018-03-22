describe("The mostProfitableDepartment function", function(){
      if(Array.isArray(salesData)){
        it("It should correctly return a Department: outdoor, as most profitable department", function(){
          assert.deepEqual(mostProfitableDepartment(salesData),'outdoor');
        });
      }
      else if(Array.isArray(salesData) == false ){
        it("Unexpected type error:", function(){
          assert.deepEqual(mostProfitableDepartment({name : 'apples', qty : 20}), "Unexpected type error:");
        });
      }
});

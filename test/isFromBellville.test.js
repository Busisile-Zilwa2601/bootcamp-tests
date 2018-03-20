describe("The isFromBellville function", function(){
    it("Should print true", function(){
      assert.equal(true, isFromBellville("CY 23 NB GP"));
      });
    it("Should print false", function(){
      assert.equal(false, isFromBellville("DV 23 NB GP"));
    });
    it("Should enter a String type",function(){
      assert.equal("Please input String", isFromBellville(10));
    });
    it("Should false for any string Not starting with CY",function(){
      assert.equal(false, isFromBellville("true"));
    });
});

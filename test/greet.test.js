describe("The greet function", function() {
  it("Should greet Busisile correctly", function(){
    assert.equal("Hello, Busisile", greet("Busisile"));
  });

  it("Should greet Nolupho correctly", function(){
    assert.equal("Hello, Nolupho", greet("Nolupho"));
  });
});

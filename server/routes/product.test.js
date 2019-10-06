var assert = require("assert"); //link in assertion library
var linearPoint = require('../linearPoint')
describe("Tests for server1 end points", () => {
  describe("Test Case 1 #getAll()", () => {
    it("should return a json array of products", () => {
        assert.equal(linearPoint(2,1,4), 6);
    });
  });
  describe("Test Case 2 #add()", () => {
    it("should add a product to the database", () => {
        assert.equal(linearPoint(2,0,4), 4);
    });
  }); 
  describe("Test Case 3 #add()", () => {
    it("should add a product to the database", () => {
        assert.equal(linearPoint(2,0,4), 4);
    });
  });
  describe("Test Case 4 #remove()", () => {
    it("should remove a product from the database", () => {
        assert.equal(linearPoint(2,-1,4), 2);
    });
  });
});

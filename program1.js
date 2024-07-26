const getTotalIsles = function (grid) {

  function  describe() {
    const result = getTotalIsles([["L","L","L","L","W"],["L","L","W","L","W"],["L","L","W","W","W"],["W","W","W","W","W"]]);
    assert.equal(result, 1);
});
 
};
getTotalIsles()

module.exports = getTotalIsles;
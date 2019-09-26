
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {
  getProducts: function() { 
    productInventory.getProducts();
  },

  getProduct: function(productId) {
    productInventory.getProduct(productId);
  }
};
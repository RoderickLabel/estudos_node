
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {
  getAmount: function(coinType) {
    changeHandler.getAmount(coinType);
  }
};

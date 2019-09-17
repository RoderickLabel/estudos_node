
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {
  canAfford: function() {
    balanceManager.canAfford(amount)
  },

  decreaseBalance: function(amount){
    balanceManager.decreaseBalance(amount);
  },

  getBalance: function(){ 
    balanceManager.getBalance();
  },
  
  increaseBalance: function(amount){
    balanceManager.increaseBalance(amount);
  }

};

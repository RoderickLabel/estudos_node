// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter
var coins = {
    'q': 25,
    'd': 10,
    'n': 5,
    'p': 1
};

module.exports = {
    
    getAmount: function(coinType) {
        if(!coins.hasOwnProperty(coinType)){
            throw new Error('Unrecognized coin ' + coinType);
        }
        return coins[coinType];
    },

    getCoinType: function(coinValue) {
        for (let i = 0; i < coins.length; i++) {
            if (coins[i] == coinValue) {
                return coins[i]
            }
        }
    },

    convertToChange: function(value) {    
        var remainder = value, arrReturn = [];
        if (remainder == 0) { return []; }
        for (coin in coins) {
            if (remainder % coins[coin] > 0 || remainder < 5) {
                incidences = parseInt(remainder / coins[coin]);
                for (let i = 0; i < incidences; i++) {
                    arrReturn.push(coin);
                }
                remainder -= incidences * coins[coin];
            }
        }
        return arrReturn;
    },

};

/*
    var coinsByAmount = ['q', 'd', 'n', 'p'];
    
    module.exports = {
      convertToChange: function(amount) {
        var change = [];
        for(var i in coinsByAmount){
          var coinType = coinsByAmount[i];
          var coinValue = coins[coinType];
    
          while(amount >= coinValue){
            change.push(coinType);
            amount -= coinValue;
          }
        }
        return change;
      }
    };
*/
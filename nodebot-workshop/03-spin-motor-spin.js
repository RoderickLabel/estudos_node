var five = require("johnny-five")
var board = new five.Board();

board.on("ready", function() {
    motor = new five.Motor(9);
    motor.forward(200); 
}).wait(2000, function() {
    motor.stop();
});

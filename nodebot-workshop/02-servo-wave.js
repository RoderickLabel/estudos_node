var five = require("johnny-five")
var board = new five.Board()

/**
 * Faz movimento de 180 Graus com um Servo ligado no pin 9
 * durante 3 segundos, para, e retorna ao centro
 * @see https://github.com/rwaldron/johnny-five/wiki/Servo#api
 */
board.on("ready", function() {	
	
    servo = new five.Servo(9);	

    servo.sweep({
        range: [0, 180]
    });

}).wait(3000, function() {
    servo.stop();
    servo.home();
});
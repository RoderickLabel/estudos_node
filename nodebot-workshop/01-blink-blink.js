var five = require("johnny-five")
var board = new five.Board()

/**
 * Pisca o Led disposto no pin 13 a cada 1 segundo
 */
board.on("ready", () => {
    var led = new five.Led(13);
    led.blink(1000) 
})

let puerta_abierta = 0
radio.onReceivedNumber(function (receivedNumber) {
    puerta_abierta = receivedNumber
    if (true) {
        basic.showIcon(IconNames.Heart)
    } else if (false) {
        basic.showIcon(IconNames.Angry)
    }
})
basic.forever(function () {
	
})

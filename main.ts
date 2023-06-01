radio.onReceivedNumber(function (receivedNumber) {
    alarma = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let alarma = 0
radio.setGroup(35)
basic.forever(function () {
    if (alarma == 1) {
        basic.showIcon(IconNames.Sad)
    } else if (alarma == 0) {
        basic.showIcon(IconNames.Happy)
    }
})

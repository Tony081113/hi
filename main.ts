input.onButtonPressed(Button.A, function () {
    radio.sendString("hi sb")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)

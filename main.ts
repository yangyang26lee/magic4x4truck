radio.onReceivedString(function (receivedString) {
    if (receivedString == "go") {
        magicbit.MotorRunDual(magicbit.Motors.M1, 150, magicbit.Motors.M2, 150)
        magicbit.MotorRunDual(magicbit.Motors.M3, -150, magicbit.Motors.M4, -150)
    } else if (receivedString == "stop") {
        magicbit.MotorStopAll()
    } else if (receivedString == "left") {
        magicbit.MotorStopAll()
        magicbit.MotorRunDual(magicbit.Motors.M1, 50, magicbit.Motors.M2, 50)
        magicbit.MotorRunDual(magicbit.Motors.M3, -150, magicbit.Motors.M4, -150)
    } else if (receivedString == "right") {
        magicbit.MotorStopAll()
        magicbit.MotorRunDual(magicbit.Motors.M3, -50, magicbit.Motors.M4, -50)
        magicbit.MotorRunDual(magicbit.Motors.M1, 150, magicbit.Motors.M2, 150)
    }
})
radio.setGroup(25)

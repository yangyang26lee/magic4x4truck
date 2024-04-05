radio.onReceivedString(function (receivedString) {
    if (receivedString == "left-on") {
        joystick = 0
        magicbit.MotorRunDual(magicbit.Motors.M1, -150, magicbit.Motors.M2, 150)
        magicbit.MotorRunDual(magicbit.Motors.M3, 150, magicbit.Motors.M4, -150)
    } else if (receivedString == "left-off") {
        joystick = 1
    } else if (receivedString == "right-on") {
        joystick = 0
        magicbit.MotorRunDual(magicbit.Motors.M1, 150, magicbit.Motors.M2, -150)
        magicbit.MotorRunDual(magicbit.Motors.M3, -150, magicbit.Motors.M4, 150)
    } else if (receivedString == "right-off") {
        joystick = 1
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    } else if (name == "y") {
        y = value
    }
    if (x > 500 && x < 550 && (y > 500 && y < 550)) {
        if (joystick == 1) {
            magicbit.MotorStopAll()
        }
    } else {
        speed = y / 2 - 255
        differ = x / 4 - 128
        magicbit.MotorRunDual(magicbit.Motors.M1, speed - differ, magicbit.Motors.M2, speed - differ)
        magicbit.MotorRunDual(magicbit.Motors.M3, 0 - speed - differ, magicbit.Motors.M4, 0 - speed - differ)
    }
})
let differ = 0
let speed = 0
let joystick = 0
let x = 0
let y = 0
radio.setGroup(100)
y = 511
x = 511
joystick = 1
basic.forever(function () {
    magicbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Red, rgb_ColorEffect.Flash)
    magicbit.Setting_the_on_board_lights(Offset.FOUR, RgbColors.Red, rgb_ColorEffect.Flash)
})

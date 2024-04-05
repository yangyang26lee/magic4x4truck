radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    } else if (name == "y") {
        y = value
    }
    if (x > 500 && x < 550 && (y > 500 && y < 550)) {
        magicbit.MotorStopAll()
    } else {
        speed = y / 2 - 255
        differ = x / 4 - 128
        magicbit.MotorRunDual(magicbit.Motors.M1, speed - differ, magicbit.Motors.M2, speed - differ)
        magicbit.MotorRunDual(magicbit.Motors.M3, 0 - speed - differ, magicbit.Motors.M4, 0 - speed - differ)
    }
})
let differ = 0
let speed = 0
let x = 0
let y = 0
radio.setGroup(100)
y = 511
x = 511

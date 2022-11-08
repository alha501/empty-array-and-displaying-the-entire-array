input.onButtonPressed(Button.A, function () {
    length += -1
    basic.showNumber(length)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= length - 1; index++) {
        list.push(index + 1)
    }
})
input.onButtonPressed(Button.B, function () {
    length += 1
    basic.showNumber(length)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index <= length - 1; index++) {
        basic.showNumber(list[index])
    }
})
let length = 0
let list: number[] = []
list = []
length = 0
basic.showNumber(length)
basic.forever(function () {
	
})

input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
	
})
basic.forever(function () {
    if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.dunkel)) {
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        basic.pause(500)
        calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 50)
        calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, 50)
    } else if (calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.dunkel)) {
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        basic.pause(500)
        calliBot2.motor(C2Motor.links, C2Dir.rueckwaerts, 50)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 50)
        basic.pause(500)
    } else {
        calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
    }
})

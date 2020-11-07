/*
Things our program does:
1. Displays a timer
2. Shows an animated border around the timer

-> Event-based architecture
-> Class-based implementation

class Timer
{
    // Constructor
    constructor(durationInput, startButton, pauseButton)
    // Methods
    start()
    pause()
    onDurationChange()
    tick()
}
*/
class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
    
        this.startButton.addEventListener('click', this.start);
    }

    start = () => {
        console.log(this);
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
timer.start();


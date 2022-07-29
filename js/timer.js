let seconds = 0;
let minutes = 0;

let displaySeconds = 0;
let displayMinutes = 0;

var interval = null;

function timer() {
    if (!document.hidden) {
        seconds++;
    }
    
    if (seconds / 60 == 1) {
        seconds = 0;
        minutes++;
    }
    
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    document.getElementsByClassName("timer")[0].textContent = displayMinutes + ":" + displaySeconds;
}

function startTimer() {
    interval = window.setInterval(timer, 1000);
}

function endTimer() {
    clearInterval(interval);
}
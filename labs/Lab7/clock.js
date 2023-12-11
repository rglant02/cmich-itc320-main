"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = padSingleDigit(now.getMinutes());
    const seconds = padSingleDigit(now.getSeconds());
    let ampm = "AM";

    if (hours > 12) {
        hours -= 12;
        ampm = "PM";
    } else if (hours === 12) {
        ampm = "PM";
    } else if (hours === 0) {
        hours = 12;
    }

    $('#hours').textContent = padSingleDigit(hours);
    $('#minutes').textContent = minutes;
    $('#seconds').textContent = seconds;
    $('#ampm').textContent = ampm;
};

// Global stopwatch timer variable and elapsed time object
let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

const tickStopwatch = () => {
    elapsedMilliseconds += 10;

    if (elapsedMilliseconds === 1000) {
        elapsedMilliseconds = 0;
        elapsedSeconds++;

        if (elapsedSeconds === 60) {
            elapsedSeconds = 0;
            elapsedMinutes++;
        }
    }

    // Display new stopwatch time
    $('#s_minutes').textContent = padSingleDigit(elapsedMinutes);
    $('#s_seconds').textContent = padSingleDigit(elapsedSeconds);
    $('#s_ms').textContent = elapsedMilliseconds.toString().padStart(3, "0");
};

// Event handler functions
const startStopwatch = evt => {
    evt.preventDefault();

    if (stopwatchTimer === null) {
        tickStopwatch();
        stopwatchTimer = setInterval(tickStopwatch, 10);
    }
};

const stopStopwatch = evt => {
    evt.preventDefault();

    if (stopwatchTimer !== null) {
        // Stop the timer
        clearInterval(stopwatchTimer);
        stopwatchTimer = null;
    }
};

const resetStopwatch = evt => {
    evt.preventDefault();

    if (stopwatchTimer !== null) {
        // Stop the timer
        clearInterval(stopwatchTimer);
        stopwatchTimer = null;
    }

    // Reset elapsed variables and clear stopwatch display
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;
    $('#s_minutes').textContent = "00";
    $('#s_seconds').textContent = "00";
    $('#s_ms').textContent = "000";
};

document.addEventListener("DOMContentLoaded", () => {
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);

    // Set up stopwatch event handlers
    $('#start').addEventListener("click", startStopwatch);
    $('#stop').addEventListener("click", stopStopwatch);
    $('#reset').addEventListener("click", resetStopwatch);
});

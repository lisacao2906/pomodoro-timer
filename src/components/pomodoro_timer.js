import * as math from 'mathjs';

// Declare global variables to be accessed by functions 
const workDuration = 25 * 60 * 1000; // 25 minutes of work time in milliseconds
const breakDuration = 5 * 60 * 1000; // 5 minutes of break in milliseconds

let timer; // Declare but does not assign any value, default value: undefined
let isWorkSession = true; // Start with a work session

// Display time remaining in a break or work session
function displayTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    console.log(`${minutes}: ${seconds < 10 ? '0' : ''}${seconds}`);
}

// This function is the main function 
// Running this function will start the Pomodoro cycle 
function startPomodoro() {
    // Assign timeRemaining based on the current session
    let timeRemaining; 
    if (isWorkSession) {
        timeRemaining = workDuration;
    } else {
        timeRemaining = breakDuration;
    }
    //console.log(`Time Remaining: ${timeRemaining} ms`);

    // Now Start the countdown 
    timer = setInterval(() => {
        if (timeRemaining <= 0) { // Fixed spacing in the comparison operator
            clearInterval(timer); 
            if (isWorkSession) { // If work session = true, then after time reaches 0, we take a break
                console.log("Time's up! Let's take a 5 min break!");
            } else {
                console.log("Break is over! Let's get back to work for another 25 minutes!");
            }

            // Every time a break or work session time reaches 0, reverse the isWorkSession.
            isWorkSession = !isWorkSession;
            startPomodoro(); // Restart the Pomodoro cycle
            return; 
        }

        displayTime(timeRemaining);
        timeRemaining -= 1000; // Decrease time by 1 second 
    }, 1000); // Corrected placement of parentheses
}

// Start the Pomodoro timer
startPomodoro();






// call on the main function 
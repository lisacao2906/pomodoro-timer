// App.js

import React, { useState, useEffect } from 'react';
import Quote from './components/quote.js'; // Make sure the path is correct based on your file structure

const App = () => {
    const workDuration = 25 * 60 * 1000; // 25 minutes in milliseconds
    const breakDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

    const [timeRemaining, setTimeRemaining] = useState(workDuration);
    const [isWorkSession, setIsWorkSession] = useState(true);
    let timer = null;

    useEffect(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer);
            setIsWorkSession(!isWorkSession);
            setTimeRemaining(isWorkSession ? breakDuration : workDuration);
        }
    }, [timeRemaining, isWorkSession]);

    const startTimer = () => {
        timer = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 1000);
        }, 1000);
    };

    const displayTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    return (
        <div className="App">
            <h1 className="session-title">{isWorkSession ? 'Work Session' : 'Break Time'}</h1>
            <h2>{displayTime(timeRemaining)}</h2>
            <Quote /> {/* Quote component added here */}
            <button onClick={startTimer}>Start</button>
            <button onClick={() => clearInterval(timer)}>Reset</button>
        </div>
    );
};

export default App;




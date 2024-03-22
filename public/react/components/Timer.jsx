// TIMER COMPONENT
    // Countdown functionality for the game
    // Starts if gameIsStarted is true
    // Stops if check is closed
    // Stores time stopped at to calculate tip


import React, { useEffect } from "react";

function Timer({ gameIsStarted, time, setTime }) {

    useEffect(() => {
        let interval;

        if (gameIsStarted) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameIsStarted])

    
    return (
        <>
            <div id="timer-div">
                <h4>Timer</h4>
                <div id="countdown">{time}</div>
            </div>
        </>
    )
}

export default Timer;
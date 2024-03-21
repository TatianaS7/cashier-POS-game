// TIMER COMPONENT
    // Countdown functionality for the game
    // Starts if gameIsStarted is true
    // Stops if check is closed
    // Stores time stopped at to calculate tip


import React, { useState, useEffect } from "react";

function Timer({ gameIsStarted }) {
    const [currentTime, setCurrentTime] = useState(null);

    let time = 0;


    
    // useEffect(() => {
    //     let intervalID;
        
    //     if (gameIsStarted) {
    //         intervalID = setInterval(() => {
    //             console.log(intervalID)
    //             setCurrentTime(prevTime => prevTime - 1);
    //         }, 1000);
    //     }
    //     return () => clearInterval(intervalID);
    // }, [gameIsStarted]);

    return (
        <>
            <div id="timer-div">
                <h4>Timer</h4>
                <div id="countdown">{currentTime}</div>
            </div>
        </>
    )
}

export default Timer;
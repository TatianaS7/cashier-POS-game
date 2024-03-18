import React from "react";
import Header from "./Header";

function GameToggle({ gameIsStarted, setGameIsStarted }) {
    function endGame() {
        // Add Functionality to show all stats and end the game
        window.alert('End Game?')
    }

    function handleButtonClick() {
        setGameIsStarted(!gameIsStarted)
        console.log('Game is started', gameIsStarted);
    }

    return (
        <>
        {gameIsStarted ? 
            <button id="clockout" className="btn btn-warning" onClick={endGame}>Clock Out</button>
            :
            <button id="start-game" className="btn btn-success" onClick={handleButtonClick}>Start Game</button>
        }
        </>
    )
}

export default GameToggle;
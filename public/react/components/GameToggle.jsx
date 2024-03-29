// GAME TOGGLE COMPONENT
    // Toggles between Clock In/Clock Out buttons to start and end game
    // Fetches order when game is started
    // Resets all states when game is ended


import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function GameToggle({ fetchOrder, setOrder, setItems, gameIsStarted, setGameIsStarted, setTime, setGameRound, setTip, setFinalTotal }) {
    const [show, setShow] = useState(false);

    function endGame() {
        setGameIsStarted(false);
        setOrder({});
        setItems({
            entrees: [],
            sides: [],
            beverages: [],
            desserts: []
        })
        setShow(false);
        setTime(null);
        setGameRound(0);
        setTip(0);
        setFinalTotal(0);
    }

    // Sets State to true 
    function startGame() {
        setGameIsStarted(true);
        setItems({
            entrees: [],
            sides: [],
            beverages: [],
            desserts: []
        })
        setTime(30);
        setGameRound(1);
    };

    // Fetches order if gameIsStarted is true upon state change
    useEffect(() => {
        if(gameIsStarted) {
            fetchOrder();
        }
    }, [gameIsStarted]);

    
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);


    return (
        <>
        {/* Renders buttons according to game being started */}
        {gameIsStarted ? 
            <button 
            id="clockout" 
            className="btn btn-warning" 
            onClick={handleOpen}>
                Clock Out
            </button>
            :
            <button 
            id="clockin" 
            className="btn btn-success" 
            onClick={startGame}>
                Clock In
            </button>
        }

        {/* Modal to end game */}
        <Modal show={show} onHide={handleClose} size="md" centered>
            <Modal.Header><h4>End Game?</h4></Modal.Header>
            <Modal.Body id="endGame-modalBody">
                Are you sure you want to end the game?
            </Modal.Body>
            <Modal.Footer id="endGame-modal-buttons">
                <Button onClick={handleClose} variant="success">Go Back</Button>
                <Button onClick={endGame} variant="danger">End Game</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default GameToggle;
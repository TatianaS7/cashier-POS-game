// GAME TOGGLE COMPONENT
    // Toggles between Clock In/Clock Out buttons to start and end game
    // Fetches order when game is started
    // Resets all states when game is ended


import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import apiURL from "../api";

function GameToggle({ setOrder, setItems, gameIsStarted, setGameIsStarted }) {
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
    };

    // Fetches order if gameIsStarted is true upon state change
    useEffect(() => {
        if(gameIsStarted) {
            fetchOrder();
        }
    }, [gameIsStarted]);

    // Function to fetch random order - Flask API from Python function
    async function fetchOrder() {
        try {
            const res = await axios.get(`${apiURL}/generate_order`);
            const data = res.data;
            setOrder(data)
        } catch (error) {
            console.error('Error fetching order', error);
        }
    };    
    
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);


    return (
        <>
        {/* Renders buttons according to state */}
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
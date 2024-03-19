import React, { useState, useEffect } from "react";
import axios from "axios";
import apiURL from "../api";

function GameToggle({ setOrder, setItems }) {
    const [gameIsStarted, setGameIsStarted] = useState(false)

    function endGame() {
        // Add Functionality to show all stats and end the game
        window.alert('End Game?')
        setGameIsStarted(false);
        setOrder([]);
        setItems({
            entrees: [],
            sides: [],
            beverages: [],
            desserts: []
        })
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
            console.log(data);
            setOrder(data)
        } catch (error) {
            console.error('Error fetching order', error);
        }
    };     


    return (
        <>
        {/* Renders buttons according to state */}
        {gameIsStarted ? 
            <button 
            id="clockout" 
            className="btn btn-warning" 
            onClick={endGame}>
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
        </>
    )
}

export default GameToggle;
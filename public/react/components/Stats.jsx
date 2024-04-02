// STATS COMPONENT
    // Tracks all order final totals and tip totals once check is closed
    // Resets if game is ended
    // Should be passed to header and displayed with updates


import React, { useState, useEffect } from "react";

function Stats({ gameIsStarted, finalTotal, checkIsClosed, tip, gameRound }) {
    const [totalSales, setTotalSales] = useState(0);
    const [totalTips, setTotalTips] = useState(0);


    useEffect(() => {
        // On the first round, when the check is closed, set total tips/sales to tip and final total
        if(gameRound === 1 && checkIsClosed) {
            setTotalSales(finalTotal);
            setTotalTips(tip)
        }
        
        // On rounds after 1 when the check is closed, save the total tips value to previous tips
        if (gameRound > 1 && checkIsClosed) {
            setTotalSales(totalSales + finalTotal);
            setTotalTips(totalTips + tip)
        }

        // When game ends, reset all states to default
        if(!gameIsStarted) {
            setTotalSales(null);
            setTotalTips(null);
        }
    }, [ gameRound, gameIsStarted, tip, checkIsClosed])

    return (
        <>
            <div>
                {/* Added conditionals to because default is null and toFixed will cause error*/}
                <h5>Total Sales: {totalSales !== null && '$' + totalSales.toFixed(2)}</h5>
                <h5>Tips: {totalTips !== null && '$' + totalTips.toFixed(2)}</h5>
            </div>
        </>
    )
}

export default Stats
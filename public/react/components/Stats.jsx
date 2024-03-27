// STATS COMPONENT
    // Tracks all order final totals and tip totals once check is closed
    // Resets if game is ended
    // Should be passed to header and displayed with updates


import React, { useState, useEffect } from "react";

function Stats({ gameIsStarted, finalTotal, checkIsClosed, tip }) {
    const [totalSales, setTotalSales] = useState(null);
    const [totalTips, setTotalTips] = useState(null);

    useEffect(() => {
        if(gameIsStarted && checkIsClosed) {
            console.log(finalTotal)
            setTotalSales(finalTotal);
            setTotalTips(tip)
        }

        else if(!gameIsStarted) {
            setTotalSales(null);
            setTotalTips(null);
        }
    }, [gameIsStarted, checkIsClosed])

    return (
        <>
            <div>
                <h5>Total Sales: {totalSales}</h5>
                <h5>Tips: {totalTips}</h5>
            </div>
        </>
    )
}

export default Stats
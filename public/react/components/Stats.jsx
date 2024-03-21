// STATS COMPONENT
    // Tracks all order totals and tip totals once check is closed
    // Resets if game is ended
    // Should be passed to header and displayed with updates


import React, { useState, useEffect } from "react";

// Should take in total state from Screen component to tally the totals
// Should take in checkIsClosed state to know check total is finalized 
function Stats() {


    return (
        <>
            <div>
                <h5>Total Sales:</h5>
                <h5>Tips:</h5>
            </div>
        </>
    )
}

export default Stats
// HEADER COMPONENT
    // Self Explanatory - Header at top of page
    // Holds title of page, Timer Component, and Stats Component

import React from "react"
import Timer from "./Timer"
import Stats from "./Stats"

function Header({ gameIsStarted, time, setTime }) {
    return(
        <>
            <div id="header-div">
                <h1>Crafts Kitchen</h1>
                <Timer gameIsStarted={gameIsStarted} time={time} setTime={setTime} />
                <Stats />
            </div>
        </>
    )
}

export default Header
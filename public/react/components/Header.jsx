// HEADER COMPONENT
    // Self Explanatory - Header at top of page
    // Holds title of page, Timer Component, and Stats Component

import React, { useState } from "react"
import Timer from "./Timer"
import Stats from "./Stats"

function Header({ gameIsStarted, time, setTime, checkIsClosed, setCheckIsClosed, finalTotal, setFinalTotal, tip, setTip }) {

    return(
        <>
            <div id="header-div">
                <h1>Crafts Kitchen</h1>
                <Timer gameIsStarted={gameIsStarted} time={time} setTime={setTime} finalTotal={finalTotal} setFinalTotal={setFinalTotal} tip={tip} setTip={setTip} checkIsClosed={checkIsClosed} setCheckIsClosed={setCheckIsClosed} />
                <Stats finalTotal={finalTotal} tip={tip} checkIsClosed={checkIsClosed} gameIsStarted={gameIsStarted} />
            </div>
        </>
    )
}

export default Header
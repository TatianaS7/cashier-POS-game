import React from "react"
import Timer from "./Timer"
import Stats from "./Stats"

function Header() {
    return(
        <>
            <div id="header-div">
                <h1>Crafts Kitchen</h1>
                <Timer />
                <Stats />
            </div>
        </>
    )
}

export default Header
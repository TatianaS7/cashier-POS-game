import React, { useState } from "react";
import Screen from "./Screen";
import MenuButtons from "./MenuButtons";
import ItemButtons from "./ItemButtons";
import DeleteButton from "./DeleteButton";
import CloseCheck from "./CloseCheck";
import GameToggle from "./GameToggle";

function POS({ order, setOrder, gameIsStarted, setGameIsStarted }) {
    // Menu State (setting current menu for items display)
    const [currentMenu, setCurrentMenu] = useState('entrees');
    
    // Items State (adding to screen)
    const [items, setItems] = useState({
        entrees: [],
        sides: [],
        beverages: [],
        desserts: []
    });

    // Add Item to Screen Function
    function handleItemClick( currentMenu, item, price ) {
        // Stores existing items in variable
        const updatedItems = {...items};
        
        //Array with categories 
        const categoryItems = updatedItems[currentMenu] || [];

        // Pushes clicked menu item into array as object with item and price
        categoryItems.push({ item, price });
        
        //Sets items to existing items plus newly added items from array
        setItems({...updatedItems, [currentMenu]: categoryItems })
        console.log(items);
    };
    
    // Set Current Menu Function 
    function handleMenuClick(value) {
        setCurrentMenu(value);
    };

    // Clear Screen Function
    function handleClearBtnClick() {
        setItems({
            entrees: [],
            sides: [],
            beverages: [],
            desserts: []})
    };

    return (
        <>
            <div className="flex" id="pos-div">
                <Screen items={Object.values(items)} order={order}/>

                <div id="pos-buttons-div">
                    <MenuButtons handleMenuClick={handleMenuClick}/><hr/>

                    <ItemButtons handleItemClick={handleItemClick} currentMenu={currentMenu}/><hr/>

                    <div id="control-buttons" className="flex-buttons">
                        <button id="clear-screen" className="btn btn-light" onClick={handleClearBtnClick}>Clear</button>
                        <DeleteButton items={Object.values(items)}/>
                        <CloseCheck items={items} />
                        <GameToggle setOrder={setOrder} setItems={setItems} gameIsStarted={gameIsStarted} setGameIsStarted={setGameIsStarted}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default POS;
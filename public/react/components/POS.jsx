import React, { useState } from "react";
import Screen from "./Screen";
import MenuButtons from "./MenuButtons";
import ItemButtons from "./ItemButtons";
import DeleteButton from "./DeleteButton";
import CloseCheck from "./CloseCheck";
import GameToggle from "./GameToggle";

function POS({ order, setOrder }) {
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
        console.log(categoryItems);
        
        //Sets items to existing items plus newly added items from array
        setItems({...updatedItems, [currentMenu]: categoryItems })
        console.log(items);
    };
    
    // Set Current Menu Function 
    function handleMenuClick(value) {
        setCurrentMenu(value);
    };

    return (
        <>
            <div className="flex" id="pos-div">
                <Screen items={Object.values(items)} order={order}/>

                <div id="pos-buttons-div">
                    <MenuButtons handleMenuClick={handleMenuClick}/><hr/>

                    <ItemButtons handleItemClick={handleItemClick} currentMenu={currentMenu}/><hr/>

                    <div id="control-buttons" className="flex-buttons">
                        <DeleteButton items={Object.values(items)}/>
                        <CloseCheck />
                        <GameToggle setOrder={setOrder} setItems={setItems}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default POS;
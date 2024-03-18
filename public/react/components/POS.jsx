import React, { useState } from "react";
import Screen from "./Screen";
import MenuButtons from "./MenuButtons";
import ItemButtons from "./ItemButtons";
import DeleteButton from "./DeleteButton";
import CloseCheck from "./CloseCheck";
import GameToggle from "./GameToggle";

function POS({ order }) {
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
    function handleItemClick( category, item, price ) {
        const updatedItems = {...items};
        const categoryItems = updatedItems[category] || [];

        categoryItems.push({ item, price });

        setItems({...updatedItems, [category]: categoryItems })
    };
    
    // Set Current Menu Function 
    function handleMenuClick(value) {
        console.log(value);
        setCurrentMenu(value);
    };

    return (
        <>
            <div className="flex" id="pos-div">
                <Screen items={items} order={order}/>

                <div id="pos-buttons-div">
                    <MenuButtons handleMenuClick={handleMenuClick}/><hr/>

                    <ItemButtons handleItemClick={handleItemClick} currentMenu={currentMenu}/><hr/>

                    <div id="control-buttons" className="flex-buttons">
                        <DeleteButton items={items}/>
                        <CloseCheck />
                        <GameToggle />
                    </div>
                </div>
            </div>
        </>
    )
}

export default POS;
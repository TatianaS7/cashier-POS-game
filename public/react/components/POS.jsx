import React, { useState } from "react";
import Screen from "./Screen";
import MenuButtons from "./MenuButtons";
import ItemButtons from "./ItemButtons";
import DeleteButton from "./DeleteButton";
import CloseCheck from "./CloseCheck";
import GameToggle from "./GameToggle";

function POS({ order }) {
    // Function that adds clicked button to Screen
    const [items, setItems] = useState({
        entrees: [],
        sides: [],
        beverages: [],
        desserts: []
    });

    function handleItemClick( category, item, price ) {
        const updatedItems = {...items};
        const categoryItems = updatedItems[category] || [];

        categoryItems.push({ item, price });

        setItems({...updatedItems, [category]: categoryItems })
    };
    

    return (
        <>
            <div className="flex" id="pos-div">
                <Screen items={items} order={order}/>

                <div id="pos-buttons-div">
                    <h4>Menu Buttons:</h4>
                    <MenuButtons /><br/>

                    <h4>Menu Item Buttons:</h4>
                    <ItemButtons handleItemClick={handleItemClick}/><br/>

                    <h4>Control Buttons:</h4>
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
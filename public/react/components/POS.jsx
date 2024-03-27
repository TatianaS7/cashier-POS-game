// POS COMPONENT
    // Serves as a container for the screen and all buttons
    // Main functions and states are initialized here for access between components

    
import React, { useState } from "react";
import Screen from "./Screen";
import MenuButtons from "./MenuButtons";
import ItemButtons from "./ItemButtons";
import DeleteButton from "./DeleteButton";
import CloseCheck from "./CloseCheck";
import GameToggle from "./GameToggle";
import axios from "axios";
import apiURL from "../api";


function POS({ order, setOrder, gameIsStarted, setGameIsStarted, time, setTime, checkIsClosed, setCheckIsClosed, finalTotal, setFinalTotal, tip, setTip }) {
    // Current Menu State (current menu for items display)
    const [currentMenu, setCurrentMenu] = useState('entrees');
    
    // Items State 
    const [items, setItems] = useState({
        entrees: [],
        sides: [],
        beverages: [],
        desserts: []
    });

    // Current Item State
    const [currentItem, setCurrentItem] = useState(null);
    

    //Generate Order Function
    async function fetchOrder() {
        try {
            const res = await axios.get(`${apiURL}/generate_order`);
            const data = res.data;
            setOrder(data)
        } catch (error) {
            console.error('Error fetching order', error);
        }
    };    

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
        // console.log(items);
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
            desserts: []
        })
    };

    // Set Current Item Function
    function handleScreenItemClick(item) {
        setCurrentItem(item);
    };

    // Delete Current Item Function
    function handleDeleteItemClick( currentItem, items ) {
        // Iterate over all menus (keys)
        Object.keys(items).forEach((menu) => {
            // Find index of item within current menu (where menuItem matches currentItem)
            const itemIndex = items[menu].findIndex((menuItem) => menuItem === currentItem)

            // If item exists in current menu (-1 indicates not found)
            if(itemIndex !== -1) {
                // Remove item from current menu
                items[menu].splice(itemIndex, 1)
            }
        })
        // Set items again to refresh the screen
        setItems(items)
    };


    return (
        <>
            <div className="flex" id="pos-div">
                <Screen items={Object.values(items)} order={order} handleScreenItemClick={handleScreenItemClick}/>

                <div id="pos-buttons-div">
                    <MenuButtons handleMenuClick={handleMenuClick}/><hr/>

                    <ItemButtons handleItemClick={handleItemClick} currentMenu={currentMenu}/><hr/>

                    <div id="control-buttons" className="flex-buttons">
                        <button id="clear-screen" className="btn btn-light" onClick={handleClearBtnClick}>Clear</button>
                        <DeleteButton items={Object.values(items)} handleDeleteItemClick={handleDeleteItemClick} currentItem={currentItem} />
                        <CloseCheck fetchOrder={fetchOrder} items={Object.values(items)} gameIsStarted={gameIsStarted} order={order} setOrder={setOrder} setItems={setItems} time={time} setTime={setTime} checkIsClosed={checkIsClosed} setCheckIsClosed={setCheckIsClosed} finalTotal={finalTotal} setFinalTotal={setFinalTotal} tip={tip} setTip={setTip} />
                        <GameToggle fetchOrder={fetchOrder} setOrder={setOrder} setItems={setItems} gameIsStarted={gameIsStarted} setGameIsStarted={setGameIsStarted} setTime={setTime} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default POS;
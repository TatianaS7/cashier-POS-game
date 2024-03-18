import React, { useState, useEffect } from "react";
import axios from 'axios';
import apiURL from "../api";

function ItemButtons({ handleItemClick, currentMenu }) {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async() => {
            try {
                const res = await axios.get(`${apiURL}/pos_system`); //Data from Python dictionary
                const items = res.data.menu_items;
                console.log(items[currentMenu]);
                setMenuItems(items[currentMenu]) //Accesses item values from currentMenu key and sets items
            } catch (error) {
                console.error('Error fetching menu items', error);
            }
        };
    fetchMenuItems();
    }, [currentMenu]); //Runs when currentMenu changes

    return (
        <>
            <div id="menu-items">
                {/* Maps menuItems array and creates buttons */}
                {menuItems.map((menuItem, index) => (
                    <button key={index} 
                    value={menuItem.item}
                    className="btn btn-info" 
                    // Passes menuItem data to handleItemClick function from POS Component
                    onClick={() => handleItemClick(currentMenu, menuItem.item, menuItem.price)}>
                        {menuItem.item}
                    </button>
                ))}
            </div>
        </>
    )
}   

export default ItemButtons;
import React, { useState, useEffect } from "react";
import axios from 'axios';
import apiURL from "../api";

function ItemButtons({ handleItemClick, items }) {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async() => {
            try {
                const res = await axios.get(`${apiURL}/pos_system`);
                // console.log(res.data);
                // setMenuItems(res.data)
            } catch (error) {
                console.error('Error fetching menu items', error);
            }
        };
    fetchMenuItems();
    }, []);

    return (
        <>
            <div id="menu-items">
                {menuItems.map((itemButtons, index) => (
                    <button key={index} value={itemButtons} onClick={handleItemClick}>{ItemButtons}</button>
                ))}
            </div>
        </>
    )
}   

export default ItemButtons;
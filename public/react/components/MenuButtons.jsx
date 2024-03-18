import React, {useState, useEffect} from "react";
import axios from "axios";
import apiUrl from '../api';


// Menu Buttons display the different menu categories
// Entrees, Sides, Beverages, Desserts

function MenuButtons() {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchMenus = async() => {
            try {
                const res = await axios.get(`${apiUrl}/pos_system`);
                const menuNames = res.data.menus;
                console.log(menuNames);
                setMenus(menuNames)
            } catch (error) {
                console.error('Error fetching menus:', error)
            }
        };
    fetchMenus(); 
    }, []);

    return (
        <>
            <div id="menu-names">
                {menus.map((menuTitle, index) => (
                    <button className="btn btn-warning" key={index} value={menuTitle}>{menuTitle}</button>
                ))}
            </div>
        </>
    )
}

export default MenuButtons;
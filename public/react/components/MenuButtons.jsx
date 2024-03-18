import React, {useState, useEffect} from "react";
import axios from 'axios';


// Menu Buttons display the different menu categories
// Entrees, Sides, Beverages, Desserts

function MenuButtons() {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchMenus = async() => {
            try {
                const res = await axios.get('/pos_system');
                // console.log(res.data);
                // setMenus(res.data)
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
                    <button key={index} value={menuTitle}>{menuTitle}</button>
                ))}
            </div>
        </>
    )
}

export default MenuButtons;
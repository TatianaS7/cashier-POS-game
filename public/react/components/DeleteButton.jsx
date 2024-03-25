// DELETE BUTTON COMPONENT
    // Responsible for "deleting" items on the screen

import React from "react";

function DeleteButton({ handleDeleteItemClick, currentItem, items }) {
    
    return (
        <button id="deleteButton" className="btn btn-danger" onClick={() => handleDeleteItemClick(currentItem, items)}>Delete Item</button>
    )
}

export default DeleteButton;
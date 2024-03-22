// DELETE BUTTON COMPONENT
    // Responsible for "deleting" items on the screen

import React from "react";

function DeleteButton({ handleDeleteItemClick, currentItem }) {
    
    return (
        <button id="deleteButton" className="btn btn-danger" onClick={() => handleDeleteItemClick(currentItem)}>Delete Item</button>
    )
}

export default DeleteButton;
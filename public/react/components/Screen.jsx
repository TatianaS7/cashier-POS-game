// SCREEN COMPONENT
// name and covers are grabbed and displayed from order
// items, prices, and totals are shown when user presses buttons

import React, { useState, useEffect } from "react";

function Screen({ order, items, handleScreenItemClick }) {
    // Totals State (adding up items on screen)
    const [totals, setTotals] = useState({
        subtotal: 0,
        tax: 0,
        total: 0
    });

    useEffect(() => {
        let subtotal = 0;
        items.map((category, index) => (
            items[index].forEach((item => {
                subtotal += item.price 
            }))
        ))
        const tax = subtotal * 0.085;
        const total = subtotal + tax;
        setTotals({ subtotal, tax, total })
    }, [items]);

    return(
        <>
        <div id="screen">
            <div id="customer-info">
                {/* Import order data */}
                <h5>Customer: {order.customer}</h5>
                <h5>Covers: {order.covers}</h5>
            </div><hr/>
                <div id="labels">
                    <p>Qty</p>
                    <p>Item</p>
                    <p>Price</p>
                </div>

            <div id="order-container">
                {/* Maps over items object, then each key's array, and outputs items w/ prices */}
                    {items.map((category, index) => (
                        // Maps over items in specified index
                        items[index].map((item, index) => (
                            // Renders div for each element with quantity, name as button (for deletion), and item price
                            <div className="item-element">
                                <p>1</p>
                                <button key={index} onClick={() => handleScreenItemClick(item)}>{item.item}</button>
                                <p key={item.price}>${item.price}</p>
                            </div>
                        ))
                    ))}
            </div><hr/>

            <div id="order-total">
                <div id="titles">
                    <h6>Subtotal</h6> 
                    <h6>Tax</h6>
                    <h3>Total</h3>
                </div>
                <div id="totals" style={{textAlign: 'right'}}>
                    {/* Calculates totals when items are added  */}
                    <h5>${totals.subtotal.toFixed(2)}</h5>
                    <h5>${totals.tax.toFixed(2)}</h5>
                    <h3>${totals.total.toFixed(2)}</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default Screen;
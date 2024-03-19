import React, { useState, useEffect } from "react";

// Screen is where name and covers are grabbed from order
// and items/totals are shown when user presses buttons

function Screen({ order, items }) {
    //Calculate Totals from button totals
    const [totals, setTotals] = useState({
        subtotal: 0,
        tax: 0,
        total: 0
    });

    useEffect(() => {
        let subtotal = 0;
        items[0].forEach(item => {
            subtotal += item.price
        });
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

            <div id="order-container">
                <div id="labels">
                    <p>Qty</p>
                    <p>Item</p>
                    <p>Price</p>
                </div>

                {items[0].map((item, index) => (
                    <>
                        <div className="item-element">
                            <p>1</p>
                            <p key={index}>{item.item}</p>
                            <p key={item.price}>${item.price}</p>
                        </div>
                    </>
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
// ORDER TICKET COMPONENT
    // Displays generated order 
    

import React, { useState, useEffect } from "react";

function OrderTicket({ gameIsStarted, order }) {
    const [orderObj, setOrderObj] = useState(null);

    console.log(gameIsStarted);
    console.log(order);

    useEffect(() => {
        if (gameIsStarted) {
            setOrderObj(order.order);
        }
    }, [gameIsStarted, order])

    console.log(orderObj);


    return (
        <div id="order-ticket">
            <h4>Order</h4><hr/>
            <div id="order-items">
                {gameIsStarted && orderObj &&
                        Object.keys(orderObj).map((category) => (
                            orderObj[category].map((item, idx) => (
                                <p key={idx}>{item}</p>
                            ))
                        ))}
            </div>
        </div>

    )
} 

export default OrderTicket;
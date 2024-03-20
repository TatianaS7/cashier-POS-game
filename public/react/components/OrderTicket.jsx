import React, { useState, useEffect } from "react";

function OrderTicket({ gameIsStarted, order }) {
    const [orderArr, setOrderArr] = useState(null);

    console.log(gameIsStarted);
    console.log(order);

    useEffect(() => {
        setOrderArr(order.order);
        console.log(orderArr);

    }, [gameIsStarted, order])


    return (
        <div id="order-ticket">
            <h4>Order</h4><hr/>
            <div id="order-items">
                
                    {/* {gameIsStarted && (
                        orderArr.map((category, index) => (
                            orderArr[index].forEach((item, index) => (
                                <p key={index}>{item}</p> 
                            ))
                        ))
                    )}                                */}
            </div>
        </div>

    )
} 

export default OrderTicket;
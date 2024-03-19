import React, { useState, useEffect } from "react";

function OrderTicket({ gameIsStarted, order }) {
    const [orderArr, setOrderArr] = useState([]);

    // console.log(gameIsStarted);

    useEffect(() => {
        if (gameIsStarted && order) {
            const orderData = order.order;
            const newOrder = [];

            // Object.keys(orderData).forEach(category => {
            //         newOrder.push(...orderData[category])
            // })
            // setOrderArr(newOrder);
            console.log(orderData);
            setOrderArr(orderData);
        } else {
            setOrderArr([]);
        }
            // let bevArr = order.order.beverages;
            // let entreeArr = order.order.entrees;
            // let sidesArr = order.order.sides;
            // let dessertsArr = order.order.desserts;
    
            // bevArr.forEach((item) => {
            //     orderArr.push(item);
            // });

            // entreeArr.forEach((item) => {
            //     orderArr.push(item)
            // })

            // sidesArr.forEach((item) => {
            //     orderArr.push(item);
            // })

            // dessertsArr.forEach((item) => {
            //     orderArr.push(item);
            // })

            // console.log('Customer:', customer);
            // console.log('Covers:', covers)
            // console.log('Order:', orderArr);
        console.log(orderArr)
    }, [gameIsStarted, order]);    
    

    return (
        <div id="order-ticket">
            <h4>Order</h4><hr/>
            <div id="order-items">
                {/* {gameIsStarted && (
                    orderArr.map((item, idx) => (
                    <p key={idx}>{item}</p>
                    ))
                )} */}
            </div>
        </div>

    )
} 

    {/* Iterates over keys(category/menu name) of order object */}
        {/* {Object.keys(order.order).map((category, index) => (
                <div key={index}>   
                     <h6>{category}</h6> */}    
                    {/* Iterates over items in each category and renders as p element*/}    
                    {/* {order.order[category].map((item, itemIndex) => {
                            <p key={itemIndex}>{item}</p>
                        })}
                </div>    
            ))}  */}    

export default OrderTicket;
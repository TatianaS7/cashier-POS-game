import React from "react";

function OrderTicket({ order }) {

    return (
        <>
            <div id="order-ticket">
                <h4>Order</h4><hr/>
                {/* <div id="order-items"> */}
                    {/* Iterates over keys(category/menu name) of order object*/}
                    {/* {Object.keys(order.order).map((category, index) => (
                        <div key={index}>
                            <h6>{category}</h6> */}
                            {/* Maps over items in each category and renders as p element*/}
                            {/* {order.order[category].map((item, itemIndex) => (
                                <p key={itemIndex}>{item}</p>
                            ))}
                        </div>    
                    ))} 
                     </div> */}
            </div>
        </>
    )
    
}

export default OrderTicket;
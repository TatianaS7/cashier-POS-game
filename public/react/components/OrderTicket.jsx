import React from "react";

function OrderTicket({ order }) {

    return (
        <>
            <div id="order-ticket">
                <h4>Order</h4><hr/>
                <div id="order-items">
                    <h6>Entrees</h6><hr/>
                    {/* {order.order.entrees.ForEach((item, index) => (
                        <p key={index}>{item}</p>
                    ))} */}

                    <h6>Sides</h6><hr/>
                    {/* {order.sides.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))} */}

                    <h6>Beverages</h6><hr/>
                    {/* {order.beverages.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))} */}

                    <h6>Desserts</h6><hr/>
                    {/* {order.desserts.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))} */}
                </div>
            </div>
        </>
    )
    
}

export default OrderTicket;
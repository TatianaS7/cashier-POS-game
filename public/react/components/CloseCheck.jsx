// CLOSE CHECK COMPONENT
    // Finalizes/Submits users items for comparison to order ticket
    // Should take in items, order, and time left from countdown 
    // Calculates Tip based on 1) Order Accuracy 2) Timeliness
    // Should pass checkIsClosed state to Stats Component to update Tip and Total Sales


import React, { useState, useEffect} from "react";
import Modal from "react-bootstrap/Modal";

function CloseCheck({ items, order, gameIsStarted, setOrder, setItems, fetchOrder, time, setTime, finalTotal, setFinalTotal, tip, setTip, checkIsClosed, setCheckIsClosed }) {
    const [show, setShow] = useState(false);
    const [finalTime, setFinalTime] = useState(null);
    const [totalItems, setTotalItems] = useState(null);
    const [correctCount, setCorrectCount] = useState(null);


    // Sets final total based on check being closed
    useEffect(() => {
        let subtotal = 0;
            items.map((category, index) => (
                items[index].forEach((item => {
                    subtotal += item.price 
                }))
            ))
            const tax = subtotal * 0.085;
            const total = subtotal + tax;

        if (checkIsClosed && gameIsStarted) {
            setFinalTotal(total);    
        }
    }, [items, checkIsClosed])


    // Checks order accuracy and calculates tip
    useEffect(() => {
        let multiplier;
        let correct = 0;
        let itemCount = 0;
        
        // Function to check items against order and set accuracy
        function compareItems(order, items) {
            // Iterate over each menu in order object
            Object.keys(order.order).forEach((menu) => {
                // Increment item count for each item in menu
                itemCount += order.order[menu].length;
                // Iterate over items in menu for order object
                order.order[menu].forEach((orderItem) => {
                    // Check if OrderItem exists in items object
                    if(items[menu] && items[menu].includes(orderItem)) {
                        // Increment correct count if found
                        console.log(items[menu].includes(orderItem));
                        correct ++;
                        console.log(correct)
                    }
                })
            })   
            setCorrectCount(correct);
            setTotalItems(itemCount); 
        }

        if (finalTotal) {
            compareItems(order, items)
        }
    
        // If all items match and time isnt at 0
        if (finalTime < 30) {
            multiplier = 0.20;
        }
    
        // If some items are wrong and time isnt at 0
            // Percentage is 10% - 0.10


        // If time is at 0, no order submitted
        else if (finalTime > 30) {
            multiplier = 0
        }
        // If finalTotal is set, calcualate and set the tip
        if (finalTotal) {
            let calculateTip = finalTotal * multiplier;
            setTip(calculateTip);    
        }
    }, [finalTime, finalTotal, gameIsStarted, checkIsClosed, correctCount, totalItems])


    // Function closes check and opens modal to show stats
    function handleCloseCheckClick() {
        if (gameIsStarted) {
            setCheckIsClosed(true);
            setShow(true);
            setFinalTime(30 - time);
        }
    }


    // Function closes modal, resets all states back to their default, and generates new order for another round
    function handleCloseModal() {
        setShow(false)
        setFinalTotal(0);
        setTip(0)
        setOrder({});
        setItems({
            entrees: [],
            sides: [],
            beverages: [],
            desserts: []
        })
        fetchOrder();
        setTime(30);
        setCorrectCount(null);
        setTotalItems(null);
    }


    return (
        <>
            <button id="close-check" className="btn btn-dark" onClick={handleCloseCheckClick}>Close Check</button>
            {checkIsClosed && (
                <Modal show={show} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Summary</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Outputs time taken to submit */}
                        You finished in: {finalTime} seconds<br/>

                        {/* Outputs number of correct items out of total items */}
                        You got {correctCount}/{totalItems} correct!<br/><br/>

                        {/* Outputs calculated tip; conditionally styled based on final time */}
                        <h4>Tip:  
                            <span style={{color: finalTime >= 30 ? 'red' : 'green'}}>
                                ${tip.toFixed(2)}
                            </span>
                        </h4>

                    </Modal.Body>
                </Modal>
            )}

        </>
    )
}

export default CloseCheck;
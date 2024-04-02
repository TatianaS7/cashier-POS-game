// CLOSE CHECK COMPONENT
    // Finalizes/Submits users items for comparison to order ticket
    // Should take in items, order, and time left from countdown 
    // Calculates Tip based on 1) Order Accuracy 2) Timeliness
    // Should pass checkIsClosed state to Stats Component to update Tip and Total Sales


import React, { useState, useEffect} from "react";
import Modal from "react-bootstrap/Modal";

function CloseCheck({ items, order, gameIsStarted, setOrder, setItems, fetchOrder, time, setTime, finalTotal, setFinalTotal, tip, setTip, checkIsClosed, setCheckIsClosed, gameRound, setGameRound }) {
    const [show, setShow] = useState(false);
    const [finalTime, setFinalTime] = useState(null);
    const [totalItems, setTotalItems] = useState(null);
    const [correctCount, setCorrectCount] = useState(null);
    const [multiplier, setMultiplier] = useState(null);


    // Sets final total based on check being closed
    useEffect(() => {
        let subtotal = 0;
        // Maps through each menu item to add up price
            items.map((category, index) => (
                items[index].forEach((item => {
                    subtotal += item.price 
                }))
            ))
            const tax = subtotal * 0.085;
            const total = subtotal + tax;

        if (finalTime) {
            setFinalTotal(total);    
        }
    }, [items, checkIsClosed, finalTime])



    // Checks order accuracy and determines tip multiplier
    useEffect(() => {
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
                    // Iterate over each key in items object
                    Object.keys(items).forEach((idx) => {
                        // Iterate over each item within key
                        items[idx].forEach((item) => {
                            // If the item property matches the order item
                            if (item.item === orderItem) {
                                // Increment correct count if found
                                correct ++;
                            }
                        })
                    })
                }
                )
            }) 
            // Set correctCount and totalItems states  
            setCorrectCount(correct);
            setTotalItems(itemCount); 
        }

        if (gameIsStarted && finalTotal) {
            compareItems(order, items)
        } else {
            setCorrectCount(0);
            setTotalItems(0);
        }
    
        // If time is under 30 seconds and all items match (but not 0)
            // 20% Tip
        if (finalTime <= 30 && correctCount === totalItems && correctCount !== 0 && totalItems !== 0) {
            setMultiplier(0.20);
        }
        // If time is under 30 seconds and more than half the items are correct but not all
            // 10% Tip
        else if (finalTime <= 30 && correctCount >= totalItems/2 && correctCount < totalItems) {
            setMultiplier(0.10)
        }
        // If time is over 30 seconds, more than half the items are incorrect, or no items have been submitted
            // No Tip
        else if (finalTime > 30 || correctCount < totalItems/2 || correctCount === 0 || totalItems === 0) {
            setMultiplier(0)
        }
    
    }, [finalTime, finalTotal, gameIsStarted, checkIsClosed, correctCount, totalItems])

    
    
    // Calculates and sets tip if final total and multiplier are set
    useEffect(() => {
        if (finalTotal && multiplier) {
            let calculateTip = finalTotal * multiplier;
            setTip(calculateTip);  
        }  
    }, [finalTotal, multiplier])


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
        setCheckIsClosed(false)
        setShow(false)
        setFinalTotal(null);
        setTip(null)
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
        setGameRound(gameRound + 1)
        setMultiplier(null);
    }


    return (
        <>
            <button id="close-check" className="btn btn-dark" onClick={handleCloseCheckClick}>Close Check</button>
            {checkIsClosed && (
                <Modal show={show} onHide={handleCloseModal} size="sm">
                    <Modal.Header closeButton>
                        <Modal.Title>Summary</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div id="time-accuracy" style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                <h4>Time</h4>
                                {/* Outputs time taken to submit */}
                                <p>{finalTime} seconds</p>
                            </div>
                            <div>
                                <h4>Accuracy</h4>
                                {/* Outputs number of correct items out of total items */}
                                <p>{correctCount}/{totalItems}</p>
                            </div>
                        </div><hr/>

                        {/* Outputs calculated tip; conditionally styled based on final time */}
                        <h4>Tip</h4>  
                            <span style={{color: finalTime >= 30 || finalTotal === 0 || multiplier === 0 ? 'red' : 'green', fontSize: '20pt', fontWeight: 'bold'}}>
                                {/* Added conditional to check tip because default is null and toFixed will cause error*/}
                                ${tip !== null && tip.toFixed(2)}
                            </span>
                        <p style={{color: 'grey'}}>Percentage: {multiplier * 100}% of {finalTotal !== null && '$' + finalTotal.toFixed(2)}</p>
                    </Modal.Body>
                </Modal>
            )}

        </>
    )
}

export default CloseCheck;
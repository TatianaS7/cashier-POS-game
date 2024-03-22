// CLOSE CHECK COMPONENT
    // Finalizes/Submits users items for comparison to order ticket
    // Should take in items, order, and time left from countdown 
    // Calculates Tip based on 1) Order Accuracy 2) Timeliness
    // Should pass checkIsClosed state to Stats Component to update Tip and Total Sales


import React, { useState, useEffect} from "react";
import Modal from "react-bootstrap/Modal";

function CloseCheck({ items, order, gameIsStarted, setOrder, setItems, fetchOrder, time, setTime }) {
    const [checkIsClosed, setCheckIsClosed] = useState(false);
    const [show, setShow] = useState(false);
    const [finalTotal, setFinalTotal] = useState(0);
    const [tip, setTip] = useState(0);
    const [accuracy, setAccuracy] = useState(null);
    const [finalTime, setFinalTime] = useState(null);


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
            // console.log(total);
            setFinalTotal(total);    
        }
    }, [items, checkIsClosed])


    useEffect(() => {
        // Function to check items against order and set accuracy

        // If all items match and time isnt at 0
            // Percentage is 20% - 0.20

        // If some items are wrong and time isnt at 0
            // Percentage is 10% - 0.10

        // If time is at 0, no order submitted
            // No Tip


        if (finalTotal) {
            let calculateTip = finalTotal * 0.15;
            // console.log(calculateTip);
            setTip(calculateTip);    
        }
    }, [finalTotal])

    // Function closes check and opens modal to show stats
    function handleCloseCheckClick() {
        if (gameIsStarted) {
            setCheckIsClosed(true);
            setShow(true);
            setFinalTime(25 - time);
            console.log(finalTime)
        }
    }

    // Function closes modal, resets all states back to their default, and generates new order for another round
    function handleCloseModal() {
        setShow(false)
        setFinalTotal(0);
        setTip(0)
        setAccuracy(null);
        setOrder({});
        setItems({
            entrees: [],
            sides: [],
            beverages: [],
            desserts: []
        })
        fetchOrder();
        setTime(25);
    }


    return (
        <>
            <button id="close-check" className="btn btn-dark" onClick={handleCloseCheckClick}>Close Check</button>
            {checkIsClosed && (
                <Modal show={show} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Close Check</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Outputs time taken to submit */}
                        You finished in: {finalTime} seconds<br/>

                        {/* Outputs number of correct items out of total */}
                        You got n/itemCount correct!<br/><br/>

                        {/* Outputs calculated tip */}
                        <h4>Tip: <span style={{color: 'green'}}>${tip.toFixed(2)}</span></h4>

                    </Modal.Body>
                </Modal>
            )}

        </>
    )
}

export default CloseCheck;
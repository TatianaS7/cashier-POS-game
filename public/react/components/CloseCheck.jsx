// CLOSE CHECK COMPONENT
    // Finalizes/Submits users items for comparison to order ticket
    // Should take in items, order, and time left from countdown 
    // Calculate Tip based on 1) Order Accuracy 2) Timeliness
    // Should pass check state to Stats Component to update Tip and Total Sales


import React, { useState, useEffect} from "react";
import Modal from "react-bootstrap/Modal";

function CloseCheck({ items, order, gameIsStarted }) {
    const [checkIsClosed, setCheckIsClosed] = useState(false);
    const [show, setShow] = useState(false);

    // useEffect(() => {
    //     let submittedItems = [];
    //     items.map((item, index) => {
    //         items[index].map((i) => {
    //             submittedItems.push(i)
    //         })
    //     });

    //     let ticketItems = [];
    //     order.order.map((item, index) => {
    //         order.order[index].map((i) => {
    //             ticketItems.push(i)
    //         })
    //     });

    //     console.log(submittedItems);
    //     console.log(ticketItems);

    // }, [checkIsClosed, items, order])

    // Function closes check and opens modal to show stats
    function handleCloseCheckClick() {
        setCheckIsClosed(true);
        setShow(true);
    }

    function handleCloseModal() {
        setShow(false)
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
                        {/* Outputs captured time left */}
                        You finished in: __ seconds<br/>
                        {/* Outputs number of correct items out of total */}
                        You got n/item count correct!<br/><br/>

                        {/* Outputs calculated tip */}
                        Tip: $0.00

                    </Modal.Body>
                </Modal>
            )}

        </>
    )
}

export default CloseCheck;
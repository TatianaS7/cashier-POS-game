// CLOSE CHECK COMPONENT
    // Should take in items, order, and time left from countdown 
    // Calculate Tip based on 1) Order Accuracy 2) Timeliness
    // Compare items to order
    // Update Stats Component with Tip and Total Sales


import React, { useState, useEffect} from "react";
import Modal from "react-bootstrap/Modal";

function CloseCheck({ items, order }) {
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

    const handleClose = () => setShow(false);


    return (
        <>
            <button id="close-check" className="btn btn-dark" onClick={handleCloseCheckClick}>Close Check</button>
            {checkIsClosed && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Close Check</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You finished in: __ seconds<br/>
                        You got n/item count correct!<br/><br/>

                        Tip: $0.00

                    </Modal.Body>
                </Modal>
            )}

        </>
    )
}

export default CloseCheck;
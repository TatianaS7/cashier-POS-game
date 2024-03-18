import React, { useState, useEffect } from 'react';
import Header from './Header';
import OrderTicket from './OrderTicket';
import POS from './POS';
import axios from 'axios';
import apiURL from '../api';


function App() {
    const [gameIsStarted, setGameIsStarted] = useState(false)
    const [order, setOrder] = useState([]);

    useEffect(() => {
        async function fetchOrder() {
            try {
                const res = await axios.get(`${apiURL}/generate_order`);
                const data = res.data;
                console.log(data);
                setOrder(data)
            } catch (error) {
                console.error('Error fetching order', error);
            }
        };
        fetchOrder();    
    }, []);

    return (
        <main>
            <Header gameIsStarted={gameIsStarted}/>

            <div className='flex'>
                <OrderTicket order={order} />
                <POS order={order}/>
            </div>
        </main>
    )
}

export default App;

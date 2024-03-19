import React, { useState, useEffect } from 'react';
import Header from './Header';
import OrderTicket from './OrderTicket';
import POS from './POS';


function App() {
    const [order, setOrder] = useState({});
    const [gameIsStarted, setGameIsStarted] = useState(false)


    return (
        <main>
            <Header gameIsStarted={gameIsStarted} />

            <div className='flex'>
                <OrderTicket order={order} gameIsStarted={gameIsStarted} />
                <POS order={order} setOrder={setOrder} gameIsStarted={gameIsStarted} setGameIsStarted={setGameIsStarted}/>
            </div>
        </main>
    )
}

export default App;

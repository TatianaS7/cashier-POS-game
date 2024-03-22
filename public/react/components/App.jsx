import React, { useState, useEffect } from 'react';
import Header from './Header';
import OrderTicket from './OrderTicket';
import POS from './POS';


function App() {
    const [order, setOrder] = useState({});
    const [gameIsStarted, setGameIsStarted] = useState(false);
    const [time, setTime] = useState(null);



    return (
        <main>
            <Header gameIsStarted={gameIsStarted} time={time} setTime={setTime} />

            <div className='flex'>
                <OrderTicket order={order} gameIsStarted={gameIsStarted} />
                <POS order={order} setOrder={setOrder} gameIsStarted={gameIsStarted} setGameIsStarted={setGameIsStarted} time={time} setTime={setTime} />
            </div>
        </main>
    )
}

export default App;

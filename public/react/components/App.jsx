import React, { useState, useEffect } from 'react';
import Header from './Header';
import OrderTicket from './OrderTicket';
import POS from './POS';


function App() {
    const [order, setOrder] = useState({});
    const [gameIsStarted, setGameIsStarted] = useState(false);
    const [time, setTime] = useState(null);
    const [checkIsClosed, setCheckIsClosed] = useState(false);
    const [finalTotal, setFinalTotal] = useState(0);
    const [tip, setTip] = useState(0);



    return (
        <main>
            <Header gameIsStarted={gameIsStarted} time={time} setTime={setTime} checkIsClosed={checkIsClosed} setCheckIsClosed={setCheckIsClosed} finalTotal={finalTotal} setFinalTotal={setFinalTotal} tip={tip} setTip={setTip} />

            <div className='flex'>
                <OrderTicket order={order} gameIsStarted={gameIsStarted} />
                <POS order={order} setOrder={setOrder} gameIsStarted={gameIsStarted} setGameIsStarted={setGameIsStarted} time={time} setTime={setTime} checkIsClosed={checkIsClosed} setCheckIsClosed={setCheckIsClosed} finalTotal={finalTotal} setFinalTotal={setFinalTotal} tip={tip} setTip={setTip} />
            </div>
        </main>
    )
}

export default App;

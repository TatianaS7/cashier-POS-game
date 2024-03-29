import React, { useState, useEffect } from 'react';
import Header from './Header';
import OrderTicket from './OrderTicket';
import POS from './POS';


function App() {
    const [order, setOrder] = useState({});
    const [gameIsStarted, setGameIsStarted] = useState(false);
    const [time, setTime] = useState(null);
    const [checkIsClosed, setCheckIsClosed] = useState(false);
    const [finalTotal, setFinalTotal] = useState(null);
    const [tip, setTip] = useState(0);
    const [gameRound, setGameRound] = useState(0);



    return (
        <main>
            <Header gameIsStarted={gameIsStarted} time={time} setTime={setTime} checkIsClosed={checkIsClosed} setCheckIsClosed={setCheckIsClosed} finalTotal={finalTotal} setFinalTotal={setFinalTotal} tip={tip} setTip={setTip} gameRound={gameRound} />

            <div className='flex'>
                <OrderTicket order={order} gameIsStarted={gameIsStarted} gameRound={gameRound} />
                <POS order={order} setOrder={setOrder} gameIsStarted={gameIsStarted} setGameIsStarted={setGameIsStarted} time={time} setTime={setTime} checkIsClosed={checkIsClosed} setCheckIsClosed={setCheckIsClosed} finalTotal={finalTotal} setFinalTotal={setFinalTotal} tip={tip} setTip={setTip} gameRound={gameRound} setGameRound={setGameRound} />
            </div>
        </main>
    )
}

export default App;

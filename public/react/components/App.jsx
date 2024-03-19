import React, { useState, useEffect } from 'react';
import Header from './Header';
import OrderTicket from './OrderTicket';
import POS from './POS';


function App() {
    const [order, setOrder] = useState([]);


    return (
        <main>
            <Header />

            <div className='flex'>
                <OrderTicket order={order} />
                <POS order={order} setOrder={setOrder}/>
            </div>
        </main>
    )
}

export default App;

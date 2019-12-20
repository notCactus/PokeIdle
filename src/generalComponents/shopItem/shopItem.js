import React, { useEffect, useState } from 'react';
import Clickable from '../clickable/clickable';
import ItemDetails from '../itemDetails/itemDetails';
import './shopItem.css';

function ShopItem({name, sprite, cost, description, onClick, popup}){

    const [amount, setAmount] = useState(1);

    useEffect(() => {
        setAmount(1);
    }, [name, sprite, cost, description]);

    return (
        <div id="shopItem">
            <ItemDetails
                name={name}
                sprite={sprite}
                description={description}
            />
            {cost ? <div className="costDetails">
                <p>{`${cost.amount} ${cost.currency}s`}</p>
                <div>
                    <input type="number" min="1" max="999" value={amount} onChange={e => setAmount(e.target.value)}/>
                    <Clickable text="Buy" style={{width:"50px", height:"30px"}} onClick={() => onClick(amount, name, cost)}/>
                </div>
            </div> : undefined}
            {popup}
        </div>
    );
}

export default ShopItem;

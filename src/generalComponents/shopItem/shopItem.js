import React, { useEffect, useState } from 'react';
import Clickable from '../clickable/clickable';
import './shopItem.css';

function ShopItem({name, sprite, cost, description}){

    const [amount, setAmount] = useState(1);

    useEffect(() => {
        setAmount(1);
    }, [name, sprite, cost, description]);

    return (
        <div id="shopItem">
            <div className="generalDetails">
                <img src={sprite} alt={name}/>
                <div className="textDetails">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="costDetails">
                <p>{`$${cost}`}</p>
                <Clickable text="Buy" style={{width:"50px", height:"30px"}} onClick={()=>{}}/>
                <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
            </div>
        </div>
    );
}

export default ShopItem;

import React, { useEffect, useState } from 'react';
import Popup from '../popup/popup';
import Clickable from '../clickable/clickable';
import ConfirmButton from '../confirmWindow/confirmWindow';
import ItemDetails from '../itemDetails/itemDetails';
import './shopItem.css';

function ShopItem({name, sprite, cost, description}){

    const [amount, setAmount] = useState(1);
    const [popup, setPopup] = useState();

    const showPopup = () => {
        setPopup(
            <Popup
                title={"Transaction"}
                exitFunction={() => setPopup()}
                view={
                    <ConfirmButton
                        toConfirm={`Would you like to buy ${amount} ${name}(s) for ${cost.amount * amount} ${cost.currency}s?`}
                        confirmFunction={() => {}}
                    />
                }
            />
        );
    }

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
                    <Clickable text="Buy" style={{width:"50px", height:"30px"}} onClick={showPopup}/>
                </div>
            </div> : undefined}
            {popup}
        </div>
    );
}

export default ShopItem;

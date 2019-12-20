import React from 'react';
import Clickable from '../clickable/clickable';
import ItemDetails from '../itemDetails/itemDetails';
import './shopItem.css';

function ShopItemPresentational({name, sprite, cost, description, onClick, id, amount, onChange}){
    return (
        <div id="shopItem">
            <ItemDetails
                name={name}
                sprite={sprite}
                description={description}
            />
            {cost ? <div className="costDetails">
                <p>{`${cost.amount * amount} ${cost.currency}s`}</p>
                <div>
                    <input type="number" min="1" max="999" value={amount} onChange={e => onChange(e)}/>
                    <Clickable
                        id={id}
                        text="Buy"
                        style={{width:"50px", height:"30px"}}
                        onClick={onClick}
                    />
                </div>
            </div> : undefined}
        </div>
    );
} export default ShopItemPresentational;
import React from 'react';
import ItemDetails from '../itemDetails/itemDetails';
import Clickable from '../clickable/clickable';
import './inventoryItem.css';

function InventoryItem({name, sprite, description, quantity, onUse}){
    return (
        <div id="inventoryItem">
            <ItemDetails
                name={name}
                sprite={sprite}
                description={description}
            />
            <div id="quantityDetails">
                <p>{`x ${quantity}`}</p>
                <Clickable text="Use" style={{width:"50px", height:"30px"}} onClick={() => onUse()}/>
            </div>
        </div>
    );
} export default InventoryItem;
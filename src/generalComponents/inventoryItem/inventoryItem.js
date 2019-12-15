import React from 'react';
import ItemDetails from '../itemDetails/itemDetails';
import Clickable from '../clickable/clickable';
import './inventoryItem.css';

function InventoryItem({name, sprite, description, quantity}){
    return (
        <div id="inventoryItem">
            <ItemDetails
                name={name}
                sprite={sprite}
                description={description}
            />
            <div id="quantityDetails">
                <p>{`x ${quantity}`}</p>
                <Clickable text="Use" style={{width:"50px", height:"30px"}} onClick={() => {}}/>
            </div>
        </div>
    );
} export default InventoryItem;
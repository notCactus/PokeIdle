import React from 'react';

function ItemDetails({name, sprite, description}){
    return (
        <div className="generalDetails">
            <img src={sprite} alt={name}/>
            <div className="textDetails">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
} export default ItemDetails;
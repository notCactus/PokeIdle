import React from 'react';
import './clickable.css';

function Clickable({text, onClick, style, id}){
    return (
        <div className="clickable" id={id} style={style} onClick={onClick}>
            {text}
        </div>
    );
} export default Clickable;

import React from 'react';
import './clickable.css';

function Clickable({text, onClick, style}){
    return (
        <div className="clickable" style={style} onClick={onClick}>
            {text}
        </div>
    );
} export default Clickable;
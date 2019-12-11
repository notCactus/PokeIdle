import React, { Component } from 'react';
import Clickable from '../clickable/clickable';
import { Link } from "react-router-dom"
import './linkButton.css';

function LinkButton({text, onClick, linkTo}){
  return (
    <div className="LinkButton">
      <Link to={linkTo}>
        <Clickable text={text} onClick={onClick}/>
      </Link>
    </div>
  );
} export default LinkButton;

import React from 'react';
import { useLocation } from 'react-router-dom';

function Header(){
    return(
        <div className="PokeHeader">
          <h1>{getTitle(useLocation().pathname)}</h1>
        </div>
      );
}

function getTitle(path){
    switch (path){
        case '/profile':
            return "PROFILE";
        case '/quest':
            return "QUEST";
        case '/shop':
            return "SHOP";
        default:
            return "Titel finns inte än";
    }
}
export default Header;
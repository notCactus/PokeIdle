import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderPresentational from './headerPresentational';

function Header(){
    return(
        <HeaderPresentational
            title={getTitle(useLocation().pathname)}
        />
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
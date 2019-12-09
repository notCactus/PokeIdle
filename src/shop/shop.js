import React from 'react';
import ShopPresentational from './shopPresentational';
import {getItem} from '../api/api';
import './shop.css';

const menus = {
    medicine: {
        menuIcon:<span>Medicine</span>,
        items:[]
    },
    balls: {
        menuIcon:<span>Balls</span>,
        items:[]
    },
    pokemon: {
        menuIcon:<span>Pokémon</span>,
        items:[]
    }
};

function Shop(){
console.log(getItem(1).name);
    return (
        <div className="shop">
            <ShopPresentational
                active='medicine'
                default='medicine'
                width='80%'
                height='100%'
                menus={menus}
            />
        </div>
    );
}

export default Shop;
import React, { useState, useEffect } from 'react';
import ShopPresentational from './shopPresentational';
import {getItem} from '../api/api';
import ShopItem from '../generalComponents/shopItem/shopItem';
import './shop.css';

const shopData = [
    {
        name: 'medicine',
        menuIcon:<span>Medicine</span>,
        pokeMenu: false,
        items:[
            'potion',
            'super-potion',
            'hyper-potion'
        ]
    },
    {
        name: 'balls',
        menuIcon:<span>Balls</span>,
        pokeMenu: false,
        items:[
            'poke-ball',
            'great-ball',
            'ultra-ball'
        ]
    },
    {
        name: 'pokemon',
        menuIcon:<span>Pokémon</span>,
        pokeMenu: true,
        items:[

        ]
    }
]

function createMenu(items){
    let menusTemp = {};
    shopData.forEach((menu, i) =>
        menusTemp[menu.name] = {menuIcon: menu.menuIcon, items: items ? items[i].map(item => 
            <ShopItem 
                name={item.names.filter(name => name.language.name === 'en')[0].name}
                sprite={item.sprites.default}
                cost={item.cost}
                description={item.effect_entries[0].short_effect}
            /> 
        ) : [<ShopItem name={'Loading...'} sprite={'./loading.gif'}/>]}
    );
    return menusTemp;
}

function Shop(){
    const [menus, setMenus] = useState(createMenu());

    useEffect(() => {
        Promise.all(shopData.map(menu => 
            Promise.all(menu.items.map(item => 
                getItem(item)
            ))
        )).then(items => {
            setMenus(createMenu(items));
        })
    }, []);

    return (
        <div className="shop">
            <ShopPresentational
                active='medicine'
                fallback='medicine'
                menus={menus}
                searchbar={true}
            />
        </div>
    );
}

export default Shop;
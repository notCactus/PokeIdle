import React, { useState, useEffect } from 'react';
import ShopPresentational from './shopPresentational';
import {getItem} from '../api/api';
import ShopItem from '../generalComponents/shopItem/shopItem';
import './shop.css';

const shopData = [
    {
        name: 'medicine',
        menuIcon:<span>Medicine</span>,
        items:[
            'potion',
            'super-potion',
            'hyper-potion'
        ]
    },
    {
        name: 'balls',
        menuIcon:<span>Balls</span>,
        items:[
            'poke-ball',
            'great-ball',
            'ultra-ball'
        ]
    },
    {
        name: 'pokemon',
        menuIcon:<span>Pokémon</span>,
        items:[

        ]
    }
]

function Shop(){
    const [menus, setMenus] = useState({medicine:{items:[]}, balls:{items:[]}, pokemon:{items:[]}});
    useEffect(() => {
        Promise.all(shopData.map(menu => 
            Promise.all(menu.items.map(item => 
                getItem(item)
            ))
        )).then(items => {
            let menusTemp = {};
            shopData.forEach((menu, i) =>
                menusTemp[menu.name] = {menuIcon: menu.menuIcon, items: items[i].map(item => 
                    <ShopItem 
                        name={item.names.filter(name => name.language.name === 'en')[0].name}
                        sprite={item.sprites.default}
                        cost={item.cost}
                        description={item.effect_entries[0].short_effect}
                    />
                )}
            );
            setMenus(menusTemp);
        })
    }, [setMenus]);

    return (
        <div className="shop">
            <ShopPresentational
                active='medicine'
                fallback='medicine'
                width='80%'
                height='100%'
                menus={menus}
                searchbar={true}
            />
        </div>
    );
}

export default Shop;
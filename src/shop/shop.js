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

/*function menus() {
    Promise.all(shopData.map(menu => 
        Promise.all(menu.items.map(item => 
            getItem(item)
        ))
    )).then(items => {
        let menus = {};
        shopData.forEach((menu, i) =>
            menus[menu.name] = {menuIcon: menu.menuIcon, items: items[i].map(item => 
                <ShopItem 
                    //name={item.names.filter(name => name.language === 'en')[0].name}
                    name={'Potion'}
                    sprite={item.sprites.default}
                    cost={item.cost}
                    description={item.effect_entries[0].short_effect}
                />
            )}
        );
        setMenus(menus);
    })
}*/
function Shop(){
    //const [menus, setMenus] = useState();
    //useEffect(() => {
        /*return Promise.all(shopData.map(menu => 
            Promise.all(menu.items.map(item => 
                getItem(item)
            ))*/
        return Promise.all(shopData[0].items.map(item => getItem(item)
        )).then(items => {
            let menus = {};
            shopData.forEach((menu, i) =>
                menus[menu.name] = {menuIcon: menu.menuIcon, items: items[i].map(item => 
                    <ShopItem 
                        //name={item.names.filter(name => name.language === 'en')[0].name}
                        name={'Potion'}
                        sprite={item.sprites.default}
                        cost={item.cost}
                        description={item.effect_entries[0].short_effect}
                    />
                )}
            );
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
            //setMenus({menus});
        })
    //});

    /*return (
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
    );*/
}

export default Shop;
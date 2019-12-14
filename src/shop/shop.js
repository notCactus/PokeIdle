import React, { useState, useEffect } from 'react';
import ShopPresentational from './shopPresentational';
import {getItem} from '../api/api';
import ShopItem from '../generalComponents/shopItem/shopItem';
import app from '../base'
import './shop.css';

function firstMenu(menus){
    for (const menu in menus)
        return menu;
}

function createMenu(items, shopData){
    if (items){
        let menusTemp = {};
        shopData.forEach((menu, i) =>
            menusTemp[menu.name] = {menuIcon: <img src={'./' +  menu.menuIcon} alt={menu.name}/>, items: items[i].map(item => 
                <ShopItem 
                    name={item.names.filter(name => name.language.name === 'en')[0].name}
                    sprite={item.sprites.default}
                    cost={item.cost}
                    description={item.effect_entries[0].short_effect}
                /> 
            )}
        );
        return menusTemp;
    } else {
        return {loading:{items:[<ShopItem name={'Loading...'} sprite={'./loading.gif'}/>]}};
    }
}

function Shop(){
    const [menus, setMenus] = useState(createMenu());

    useEffect(() => {
        let retrievedShop;
        app.database().ref('/shop').once('value').then(shopData => {
            retrievedShop = shopData.val();
            Promise.all(retrievedShop.map(menu => 
                Promise.all(menu.items.map(item => 
                    getItem(item)
                ))
            )).then(items => {
                setMenus(createMenu(items, retrievedShop));
            })
        })
    }, []);

    const defMenu = firstMenu(menus);
    return (
        <div className="shop">
            <ShopPresentational
                active={defMenu}
                fallback={defMenu}
                menus={menus}
                searchbar={true}
            />
        </div>
    );
}

export default Shop;
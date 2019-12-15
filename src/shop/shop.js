import React, { useState, useEffect } from 'react';
import ShopPresentational from './shopPresentational';
import {getItem, getSpecies, getPokemon} from '../api/api';
import ShopItem from '../generalComponents/shopItem/shopItem';
import app from '../base'
import './shop.css';

/* Kanske flytta denna metod till en separat fil som skriver till databasen? */
function updateMenuItems(menuNo) {
    const POKE_AMOUNT = 807;
    let taken = [];
    let randPoke;
    let randPokes = [];
    for (let i = 0; i < 10; i++){
        do {
            randPoke = Math.floor(Math.random() * (POKE_AMOUNT + 1))
        } while (taken[randPoke]);
        taken[randPoke] = true;
        randPokes.push(randPoke);
    }
    const menu = app.firestore().collection('shop').doc(`${menuNo}`);
    menu.get().then(doc => {
        doc.items = randPokes;
        menu.set(doc);
    });
  }

function firstMenu(menus){
    for (const menu in menus)
        return menu;
}

function getPokeCost(pokemon){
    const bst = pokemon[0].stats.reduce((total, stat) => {return {base_stat: total.base_stat + stat.base_stat}}).base_stat;
    const cr = pokemon[1].capture_rate;
    let cost = {};
    if (bst < 350) {
        cost.currency = 'Poké Ball';
        cost.amount = Math.floor(1000 / cr);
    } else if (bst < 500) {
        cost.currency = 'Great Ball';
        cost.amount = Math.floor(400 / cr);
    } else {
        cost.currency = 'Ultra Ball';
        cost.amount = Math.floor(300 / cr);
    }
    return cost;
}

function createMenu(items, shopData){
    if (items){
        let menusTemp = {};
        shopData.forEach((menu, i) =>
            menusTemp[menu.name] = {menuIcon: <img src={'./' +  menu.menuIcon} alt={menu.name}/>, items: items[i].map(item => 
                menu.pokeMenu ?
                <ShopItem
                    name={item[1].names.filter(name => name.language.name === 'en')[0].name}
                    sprite={item[0].sprites.front_default}
                    cost={getPokeCost(item)}
                    description={'Type: ' + item[0].types.map(type => type.type.name)}
                /> :
                <ShopItem 
                    name={item.names.filter(name => name.language.name === 'en')[0].name}
                    sprite={item.sprites.default}
                    cost={{amount: item.cost, currency:'coin'}}
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
        let retreivedShop =[];
        app.firestore().collection('shop').get().then(docs => {
            docs.forEach(doc => retreivedShop.push(doc.data()));
            Promise.all(retreivedShop.map(menu => 
                Promise.all(menu.items.map(item => 
                    menu.pokeMenu ? Promise.all([getPokemon(item), getSpecies(item)]) : getItem(item)
                ))
            )).then(items => {
                setMenus(createMenu(items, retreivedShop));
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
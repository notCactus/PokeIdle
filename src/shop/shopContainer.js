import React, { useState, useEffect } from 'react';
import ShopPresentational from './shopPresentational';
import {getItem, getSpecies, getPokemon} from '../api/api';
import ShopItem from '../generalComponents/shopItem/shopItem';
import ConfirmButton from '../generalComponents/confirmWindow/confirmWindow';
import Popup from '../generalComponents/popup/popup';
import app from '../base';
import './shop.css';

/*
    TODO:
    Visa hur mycket pengar och pokebollar spelaren har
    Fixa transaction
    Updatera med random pokemon varje dag?
*/

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

function currencyToAmount(currency, currAmounts){
    debugger;
    switch(currency){
        case 'Poké Ball':
            return currAmounts.poke;
        case 'Great Ball':
            return currAmounts.great;
        case 'Ultra Ball':
            return currAmounts.ultra;
        default:
            return currAmounts.coins
    }
}

function createMenu(shop, items, callBack, currAmounts){
    if (items){
        let menusTemp = {};
        shop.forEach((menu, i) =>
            menusTemp[menu.name] = {menuIcon: <img src={'./' +  menu.menuIcon} alt={menu.name}/>, items: items[i].map((item, j) => {
                const apiData = {};
                if (menu.pokeMenu) {
                    apiData.name = item[1].names.filter(name => name.language.name === 'en')[0].name;
                    apiData.sprite = item[0].sprites.front_default;
                    apiData.cost = getPokeCost(item);
                    apiData.description = 'Type: ' + item[0].types.map(type => type.type.name);
                    apiData.id = item[0].name;
                } else {
                    apiData.name = item.names.filter(name => name.language.name === 'en')[0].name;
                    apiData.sprite = item.sprites.default;
                    apiData.cost = {amount: item.cost, currency:'coin'};
                    apiData.description = item.effect_entries[0].short_effect;
                    apiData.id = item.name;
                }
                return <ShopItem 
                    name={apiData.name}
                    sprite={apiData.sprite}
                    cost={apiData.cost}
                    description={apiData.description}
                    key={j}
                    id={apiData.id}
                    onClick={callBack}
                    playerAmount={currencyToAmount(apiData.cost.currency, currAmounts)}
                />
            })}
        );
        return menusTemp;
    } else {
        return {loading:{items:[<ShopItem name={'Loading...'} sprite={'./loading.gif'}/>]}};
    }
}

function ShopContainer({coins, poke, great, ultra, onPurchase}) {
    const [shopData, setShopData] = useState({});
    const [popup, setPopup] = useState();

    const showPopup = (amount, name, cost, id) => 
        setPopup(
            <Popup
                title={"Transaction"}
                exitFunction={() => setPopup()}
                view={<ConfirmButton
                        toConfirm={`Would you like to buy ${amount} ${name}(s) for ${cost.amount * amount} ${cost.currency}s?`}
                        confirmFunction={() => {onPurchase(id, amount, cost); setPopup()}}
                    />}
            />
        );

    useEffect(() => {
        let retreivedShop =[];
        app.firestore().collection('shop').get().then(docs => {
            docs.forEach(doc => retreivedShop.push(doc.data()));
            Promise.all(retreivedShop.map(menu => 
                Promise.all(menu.items.map(item => 
                    menu.pokeMenu ? Promise.all([getPokemon(item), getSpecies(item)]) : getItem(item)
                ))
            )).then(items => {
                setShopData({shop:retreivedShop, items:items});
            })
        })
    }, []);

    const menus = createMenu(shopData.shop, shopData.items, showPopup, {coins, poke, great, ultra});
    const defMenu = firstMenu(menus);
    return (
            <ShopPresentational
                active={defMenu}
                fallback={defMenu}
                menus={menus}
                popup={popup}
                coins={coins}
                poke={poke}
                great={great}
                ultra={ultra}
            />
    );
}

export default ShopContainer;
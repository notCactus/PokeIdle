import React, {useState, useEffect} from 'react';
import MenuToggler from '../menuToggler/menuToggler';
import ConfirmButton from '../confirmWindow/confirmWindow';
import InventoryItem from '../inventoryItem/inventoryItem';
import {getItem} from '../../api/api'
import './pokeOptions.css';

/*Ersätt med data från state */
const itemData = [ 
    {id:'potion', amount:5},
    {id:'super-potion', amount:2},
    {id:'hyper-potion', amount:1},
];

function PokeOptions({pokeName}){

    const [items, setItems] = useState(<InventoryItem name={'Loading...'} sprite={'./loading.gif'}/>);

    useEffect(() => {
        Promise.all(itemData.map(item => 
                getItem(item.id)
            )).then(items => 
                setItems(items.map((item, i) => 
                    <InventoryItem
                        name={item.names.filter(name => name.language.name === 'en')[0].name}
                        sprite={item.sprites.default}
                        description={item.effect_entries[0].short_effect}
                        quantity={itemData[i].amount}
                    />
                ))
            )
    }, [])

    return (
        <div className="pokeOptions">
         <MenuToggler
              active={'move'}
              fallback={'move'}
              menus={{
                move:{
                  menuIcon:<span>Move</span>,
                  items:[
                  <ConfirmButton
                    toConfirm={`Would you like to move ${pokeName} to your PC?`}
                    confirmFunction={() => {}}
                  />
                ]},
                item:{
                  menuIcon:<span>Item</span>,
                  items: items
                }
              }}
           />
        </div>
    );
} export default PokeOptions;
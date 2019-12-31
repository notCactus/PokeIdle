import React, {useState, useEffect} from 'react';
import MenuToggler from '../menuToggler/menuToggler';
import ConfirmButton from '../confirmWindow/confirmWindow';
import InventoryItem from '../inventoryItem/inventoryItem';
import {getItem} from '../../api/api'
import './pokeOptions.css';

function PokeOptions({pokemon, itemlist, roster, onMoveToPC, onMoveToRoster, onUseItem, onRelease, confirmFunction}){

    const [items, setItems] = useState(<InventoryItem name={'Loading...'} sprite={'./loading.gif'}/>);

    useEffect(() => {
          Promise.all(itemlist.map(item =>
                  getItem(item.id)
             )).then(items =>
                  setItems(items.filter(item => item.category.name === 'healing').map((item, i) =>
                      <InventoryItem
                          name={item.names.filter(name => name.language.name === 'en')[0].name}
                         sprite={item.sprites.default}
                         description={item.effect_entries[0].short_effect}
                          quantity={itemlist[i].amount}
                          onUse={() => {
                            const result = onUseItem(item.name);
                            confirmFunction(result)
                          }}
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
                    toConfirm={`Would you like to move ${pokemon.id} to your ` + (roster ? "PC" : "party" ) + "?"}
                    confirmFunction={() =>
                      {
                        const result = roster ?
                        onMoveToPC(pokemon) :
                        onMoveToRoster(pokemon);
                        confirmFunction(result)
                      }
                    }
                  />
                ]},
                item:{
                  menuIcon:<span>Item</span>,
                  items: items
                },
                release:{
                  menuIcon:<span>Release</span>,
                  items:[
                    <ConfirmButton
                      toConfirm={`Would you like to release ${pokemon.id}?`}
                      confirmFunction={() => {
                        const result = onRelease();
                        confirmFunction(result);
                      }}
                    />
                  ]
                }
              }}
           />
        </div>
    );
} export default PokeOptions;

import React from 'react';
import Funds from '../generalComponents/funds/funds';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';

function ShopPresentational({active, fallback, menus, popup, coins, poke, great, ultra}){
    return (
        <div className="shop">
            <Funds
                coins={coins}
                poke={poke}
                great={great}
                ultra={ultra}
            />
            <MenuToggler
                active={active}
                fallback={fallback}
                menus={menus}
            />
            {popup}
        </div>
    );
}

export default ShopPresentational;
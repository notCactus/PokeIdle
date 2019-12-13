import React from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';

function ShopPresentational({active, fallback, menus}){
    return (
        <MenuToggler
            active={active}
            fallback={fallback}
            menus={menus}
        />
    );
}

export default ShopPresentational;
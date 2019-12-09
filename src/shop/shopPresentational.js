import React from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';

function ShopPresentational({active, defaultMenu, width, height, margin, padding, menus}){
    return (
        <MenuToggler
            active={active}
            defaultMenu={defaultMenu}
            width={width}
            height={height}
            margin={margin}
            padding={padding}
            menus={menus}
        />
    );
}

export default ShopPresentational;
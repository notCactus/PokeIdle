import React from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';

function ShopPresentational({active, fallback, width, height, margin, padding, menus, searchbar}){
    return (
        <MenuToggler
            active={active}
            fallback={fallback}
            width={width}
            height={height}
            margin={margin}
            padding={padding}
            menus={menus}
            searchbar={searchbar}
        />
    );
}

export default ShopPresentational;
import React  from 'react';
import { useLocation } from "react-router-dom";
import SidebarPresentational from './sidebarPresentational';

function Sidebar() {

    let dir = useLocation().pathname.split('/')[1];

    return (
        <SidebarPresentational
            visibility={(dir !== 'profile' && dir !== 'quest' && dir !== 'shop') ? {display: 'none'} : undefined}
            imgSrc={'./logo.png'}
        />
    );
}

export default Sidebar;

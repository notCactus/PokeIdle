import React  from 'react';
import { useLocation } from "react-router-dom";
import SidebarPresentational from './sidebarPresentational';

function Sidebar() {
    return (
        <SidebarPresentational
            visibility={(useLocation().pathname === '/createProfile') ? {display: 'none'} : undefined}
            imgSrc={''}
        />
    );
}

export default Sidebar;

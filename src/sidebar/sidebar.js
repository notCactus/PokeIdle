import React  from 'react';
import { useLocation } from "react-router-dom";
import SidebarPresentational from './sidebarPresentational';

function Sidebar() {

    let location = useLocation();

    return (
        <SidebarPresentational
            visibility={(location.pathname === '/createProfile' || location.pathname === '/login') ? {display: 'none'} : undefined}
            imgSrc={'./logo.png'}
        />
    );
}

export default Sidebar;

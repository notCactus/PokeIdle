import React from 'react';
import { Link, useLocation } from "react-router-dom"

function SidebarLink({to, value}){
    return (
        <Link to={to} value={value} 
            className={(to === useLocation().pathname) ? 'selectedView' : undefined}>{value}
        </Link>
    );
}

export default SidebarLink;
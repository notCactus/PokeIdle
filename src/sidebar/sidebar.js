import React  from 'react';
import SidebarLink from '../generalComponents/sidebarLink.js';
import './sidebar.css';

function Sidebar({visible}) {
    return (
        <div className="sidebar" style={(visible) ? undefined : {display: 'none'}}>
            <img src={''} alt={'Logo'}/>
            <div className="sidebarNav">
                <SidebarLink to="/profile" value="PROFILE"/>
                <SidebarLink to="/quest" value="QUEST"/>
                <SidebarLink to="/shop" value="SHOP"/>
            </div>
        </div>
    );
}

export default Sidebar;
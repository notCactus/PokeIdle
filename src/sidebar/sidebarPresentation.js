import React  from 'react';
import SidebarLink from '../generalComponents/sidebarLink.js';
import './sidebar.css';

function SidebarPresentation({view, setView}) {
    return (
        <div className="sidebar">
            <img src={''} alt={'Logo'}/>
            <div className="sidebarNav" onClick={e => {if (e.target.tagName === 'A') {setView(e.target.attributes[0].value)}}}>
                <SidebarLink to="/profile" value="PROFILE" view={view} className="sidebarLink"/>
                <SidebarLink to="/quest" value="QUEST" view={view} className="sidebarLink"/>
                <SidebarLink to="/shop" value="SHOP" view={view} className="sidebarLink"/>
            </div>
        </div>
    );
}

export default SidebarPresentation;
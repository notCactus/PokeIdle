import React from 'react';
import SidebarLink from '../generalComponents/sidebarLink/sidebarLink.js';
import SignOutButton from '../generalComponents/signOutButton/signOutButton';
import './sidebar.css';

function SidebarPresentational({visibility, imgSrc}) {
    return (
        <div className="sidebar" style={visibility}>
            <img src={imgSrc} alt={'Logo'}/>
            <SidebarLink to="/profile" value="PROFILE"/>
            <SidebarLink to="/quest" value="QUEST"/>
            <SidebarLink to="/shop" value="SHOP"/>
            <SignOutButton/>
        </div>
    );
}

export default SidebarPresentational;

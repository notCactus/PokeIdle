import React from 'react';
import SidebarLink from '../generalComponents/sidebarLink.js';
import { useSelector, useDispatch } from 'react-redux';
import setView from '../actions/actions';
import './sidebar.css';

/*class Sidebar extends Component{
    render(){
        const view = useSelector(state => state.view);
        return (
            <div className="sidebar">
                <img src={''} alt={'Logo'}/>
                <div onClick={e => this.updateView(e.target, useDispatch())}>
                    <Link to="/profile">PROFILE</Link>
                    <Link to="/quest">QUEST</Link>
                    <Link to="/shop">SHOP</Link>
                </div>
            </div>
        );
    }

    updateView(target, dispatch) {
        if (target.tagName === 'LINK'){
            dispatch(setView(target.textContent));
        }
    }
}*/

function Sidebar() {
    const view = useSelector(state => state.view);
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <img src={''} alt={'Logo'}/>
            <div className="sidebarNav" onClick={e => updateView(e.target, dispatch)}>
                <SidebarLink to="/profile" value="PROFILE" view={view} className="sidebarLink"/>
                <SidebarLink to="/quest" value="QUEST" view={view} className="sidebarLink"/>
                <SidebarLink to="/shop" value="SHOP" view={view} className="sidebarLink"/>
            </div>
        </div>
    );
}

function updateView(target, dispatch) {
    if (target.tagName === 'SIDEBARLINK'){
        dispatch(setView(target.value));
    }
}

export default Sidebar;
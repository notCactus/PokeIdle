import React, { Component } from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import './rosterView.css';
function menuProps() {
  return{
      activeRoster: {
        menuIcon: <span>Active</span>,
        items: ["active-dummy-items1","active-dummy-items2",],
      },
      pcRoster: {
        menuIcon: <span>PC</span>,
        items: ["pc-dummy-items1","pc-dummy-items2","pc-dummy-items3",],
      }
    };
}
class RosterView extends Component{
  render() {
    return (
      <div className='RosterView'>
        <MenuToggler
          active="activeRoster"
          default="activeRoster"
          menus={menuProps()}
          width="100%"
          height="100%"
        />
      </div>
    );
  }
} export default RosterView;

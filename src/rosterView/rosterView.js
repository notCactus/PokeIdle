import React, { Component } from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import './rosterView.css';
function menuProps() {
  return{
      activeRoster: {
        menuIcon: <a>Active</a>,
        items: undefined,
      },
      pcRoster: {
        menuIcon: <a>PC</a>,
        items: undefined,
      }
    };
}
class RosterView extends Component{
  render() {
    return (
      <div className='RosterView'>
        <MenuToggler active="activeRoster" default="activeRoster" menus={menuProps()}/>
      </div>
    );
  }
} export default RosterView;

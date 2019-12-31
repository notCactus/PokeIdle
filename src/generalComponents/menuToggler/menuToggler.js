import React, { Component } from 'react';
import './menuToggler.css';

class MenuToggler extends Component{
  constructor(props){
    super(props);
    this.state = {
      active: this.props.active,
      fallback: this.props.fallback,
    };
    this.showMenu = this.showMenu.bind(this);
    this.menuOptions = this.menuOptions.bind(this);
  }

  render() {
    return (
      <div className="MenuToggler">
        <div id="options">
          {this.menuOptions()}
        </div>
        <div id="menuItems" onClick={this.props.menuItemClickEvent}>
          {this.menuItems(this.state.active)}
        </div>
      </div>
    );
  }

  menuOptions(){
    let options = [];
    const menus = this.props.menus;
    for(let key in menus)
      options.push(
        <div
          className={`option${key === this.state.active ? ' selected' : ''}`}
          key={key}
          onClick={()=>this.showMenu(key)}
        >
          {menus[key].menuIcon}
        </div>
      );
    return options;
  }

  menuItems(id){
    if(this.props.menus[id] !== undefined)
      if(this.props.menus[id].items !== undefined)
        return this.props.menus[id].items.map((item, i) => <div key={i} className="menuItem">{item}</div>);
    return this.props.menus[this.props.fallback].items
  }

  showMenu(key){
    this.setState({
      active: key,
    });
  }
} export default MenuToggler;

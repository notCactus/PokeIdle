import React, { Component } from 'react';
import './menuToggler.css';

class MenuToggler extends Component{
  constructor(props){
    super(props);
    this.state = {
      active: this.props.active,
      default: this.props.default,
    };
  }

  render() {
    return (
      <div className="MenuToggler">
        <div
          id="options"
          onClick={e => {
            alert('work');
          }}
        >
          {this.menuOptions()}
        </div>
        {this.menuToDisplay(this.state.active)}
      </div>
    );
  }

  menuOptions(){
    let options = [];
    const menus = this.props.menus;
    for(let key in menus)
      options.push(<div key={key} value={key}>{menus[key].menuIcon}</div>);
    return options;
  }

  menuToDisplay(id){
    if(this.props.menus[id] !== undefined)
      if(this.props.menus[id].items !== undefined)
        return this.props.menus[id];
    return <p>default</p>
  }
} export default MenuToggler;

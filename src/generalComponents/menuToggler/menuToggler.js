import React, { Component } from 'react';
import './menuToggler.css';

function style({width, height}){
  return {
    width: width,
    height: height,
  };
}

function allowEvent(element) {
  if([...element.classList].includes('option')) return element.getAttribute('value');
  else if (element.id === 'options') return false;
  return allowEvent(element.parentElement);
}

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
      <div className="MenuToggler" style={style(this.props)}>
        <div
          id="options"
          onClick={e => {
            const show = allowEvent(e.target);
            if(show !== false)
              this.setState({
                active: show,
                default: this.props.default,
              });
          }}
        >
          {this.menuOptions()}
        </div>
        <div id="menuItems">
          {this.menuItems(this.state.active)}
        </div>
      </div>
    );
  }

  menuOptions(){
    let options = [];
    const menus = this.props.menus;
    for(let key in menus)
      options.push(<div className="option" key={key} value={key}>{menus[key].menuIcon}</div>);
    return options;
  }

  menuItems(id){
    if(this.props.menus[id] !== undefined)
      if(this.props.menus[id].items !== undefined)
        return this.props.menus[id].items.map((item, i) => <div key={i} className="menuItem">{item}</div>);
    return this.props.menus[this.props.default].items
  }
} export default MenuToggler;

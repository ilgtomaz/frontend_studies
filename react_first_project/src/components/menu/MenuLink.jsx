import React, { Component } from 'react';

export class MenuLink extends Component {
  render() { 
    // const link = this.props.link || '#';
    return <li id={this.props.name} className="menu__subMenu__list__link">
              <a href="http://localhost:3000/">{this.props.name}</a>
           </li>;
  }
}
 
export default MenuLink;
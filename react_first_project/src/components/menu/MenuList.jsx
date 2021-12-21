import React, { Component } from 'react';
import { MenuLink } from './MenuLink';

export class MenuList extends Component {
  render() { 
    return <nav className="menu__subMenu__list">
              <ul>
                <MenuLink name="home" link="" />
                <MenuLink name="gallery" link="" />
                <MenuLink name="about" link="" />
                <MenuLink name="contact" link="" />
              </ul>
            </nav>;
  }
}
 
export default MenuList;
import React, { Component } from 'react';
import { MenuTitulo } from './MenuTitulo';
import { MenuList } from './MenuList';

export class SubMenu extends Component {
  render() { 
    return <div className="menu__subMenu">
              <MenuTitulo />
              <MenuList />
            </div>;
  }
}
 
export default SubMenu;
import React, { Component } from 'react';
import { SubMenu } from './SubMenu';
import { FormDownSubMenu } from './FormDownSubMenu';
import "./styles.css";

export class Menu extends Component {
  render() { 
    return <section className="menu">
      <SubMenu />

      <div className="menu__downSubMenu">
        <FormDownSubMenu />
        
        <p className="menu__downSubMenu__copyright">
          Copyright ©2021 All rights reserved | This template is made with 💙 by <a className="link__colorlib" href="https://colorlib.com/" target="_blank" rel="noopener noreferrer">Colorlib.com</a> and replied as case study (only template and images) by Igor Tomaz.
        </p>
      </div>
    </section>;
  }
}
 
export default Menu;
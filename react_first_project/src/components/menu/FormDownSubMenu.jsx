import React, { Component } from 'react';

export class FormDownSubMenu extends Component {
  render() { 
    return <form>
              <fieldset>
                <legend>Subscribe for newsletter</legend>
                <input type="email" name="email" className="menu__downSubMenu__emailNewsletter" placeholder="Enter Email Address" />
              </fieldset>
            </form>;
  }
}
 
export default FormDownSubMenu;
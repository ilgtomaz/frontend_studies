import React, { Component } from 'react';
import "./styles.css";

export class ViewPortfolio extends Component {
  render() { 
    return <p>
              <a className="view__portfolio__link" href="http://localhost:3000/">View Portifolio</a>
           </p>;
  }
}
 
export default ViewPortfolio;
import React, { Component } from 'react';

export class ContentDescriptionText extends Component {
  render() { 
    return <div className="content__description__text">
              <p>{this.props.text}</p>
           </div>;
  }
}
 
export default ContentDescriptionText;
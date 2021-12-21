import React, { Component } from 'react';

export class ContentDescriptTitle extends Component {
  render() { 
    return <p className="content__description__title">
            <a href="http://localhost:3000/">{this.props.title}</a>
           </p>;
  }
}
 
export default ContentDescriptTitle;
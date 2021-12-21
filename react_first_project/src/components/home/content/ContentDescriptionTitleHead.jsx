import React, { Component } from 'react';

export class ContentDescriptionTitleHead extends Component {
  render() { 
    return <p className="content__description__titleHead">{this.props.headTitle}</p>;
  }
}
 
export default ContentDescriptionTitleHead;
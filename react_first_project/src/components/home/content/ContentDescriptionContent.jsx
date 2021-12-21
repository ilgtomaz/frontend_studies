import React, { Component } from 'react';
import { ContentDescriptionTitleHead } from './ContentDescriptionTitleHead';
import { ContentDescriptTitle } from './ContentDescriptionTitle';
import { ContentDescriptionText } from './ContentDescriptionText';
import { ViewPortfolio } from '../../extras/ViewPortfolio';

export class ContentDescriptionContent extends Component {
  render() { 
    return <div className="content__description__content">
              <ContentDescriptionTitleHead headTitle={this.props.headTitle} />
              <ContentDescriptTitle title={this.props.title} />
              <ContentDescriptionText text={this.props.text} />
              <ViewPortfolio />
           </div>;
  }
}
 
export default ContentDescriptionContent;
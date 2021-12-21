import React, { Component } from 'react';
import { ContentDescriptionContent } from './ContentDescriptionContent';

export class Content extends Component {
  render() { 
    return <div className="content__row">
              <div className="content__photo" style={this.props.urlImage} />
              <div className="content__description">
                <ContentDescriptionContent  
                  headTitle={this.props.headTitle}
                  title={this.props.title}
                  text={this.props.text}
                />
              </div>
            </div>;
  }
}
 
export default Content;
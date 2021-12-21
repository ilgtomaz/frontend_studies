import React, { Component } from 'react';
import { Menu } from '../menu';
import { Content } from './content';
import { galleryElement } from './mockData';
import "./styles.css";

export class Home extends Component {
  render() {
    return <>
      <Menu />
      <section className="content">
        {
          galleryElement.map(element => 
            <Content 
              urlImage={element.image}
              headTitle={element.headTitle}
              title={element.title}
              text={element.description}
            />
            )
        }
        <div className="content__load__new">
          Load more <span>🗘</span>
        </div>
      </section>
    </>;
  }
}
 
export default Home;
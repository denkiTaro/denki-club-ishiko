import React from 'react';
import './_About.scss';

import home2_1 from '../../../assets/images/png/home4.png'

class About extends React.Component {
  render() {
    return (
      <div className="homeAbout" id="homeAbout">
        <h1>ABOUT</h1>
        <div className="homeAbout-box">
          <img src={home2_1}></img>
          <p>
            石巻工業の電気部は、三つの班に分かれてそれぞれの知識を深める部活です。<br/>
            練習を積み重ね、ものづくりコンテストに出場しているものコン班、ホームページを個人や班全員でつくりあげるweb班、自分の思い描くゲームを制作し、U-22などのコンテストに出展するUnity班の三班で構成されています。
          </p>
        </div>
      </div>
    );
  }
}

export default About;

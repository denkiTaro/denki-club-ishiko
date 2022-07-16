import React from 'react';
import Helmet from 'react-helmet';
import './Home.scss';
import Header from '../../components/Header/Header.jsx';
import About from './About/About.jsx';
import Member from './Member/Member.jsx';
import News from './News/News.jsx';
import Contact from './Contact/Contact.jsx';

import home1_1 from '../../assets/images/jpg/home1.jpg';
import home1_2 from '../../assets/images/jpg/home2.jpg';
import home1_3 from '../../assets/images/jpg/home3.jpg';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Helmet>
          <title>電気部 | 石巻工業高校 | TEAM FOREST | 2022</title>
          <link rel="canonical" href="https://denki-club-ishiko.web.app/"></link>
        </Helmet>

        <Header />

        <div className="home-slider">
          <li>
            <img src={home1_1} alt="" />
          </li>
          <li>
            <img src={home1_2} alt="" />
          </li>
          <li>
            <img src={home1_3} alt="" />
          </li>

          <div className="home-slider-bar"></div>
        </div>

        <About />
        <Member />
        <News />
        <Contact />

        <footer></footer>
      </div>
    );
  }
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
// import { HashLink } from 'react-router-hashlink';
import './Header.scss';

import logo from '../../assets/images/png/logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cover: true };

    this.coverChange = this.coverChange.bind(this);
  }

  coverChange(event) {
    if (this.state.cover) {
      this.setState((state) => ({
        cover: false,
      }));

      let target = event.target.closest('#header');
      target.style.visibility = 'visible';
    } else {
      this.setState((state) => ({
        cover: true,
      }));

      let target = event.target.closest('#header');
      target.style.visibility = 'hidden';
    }
  }

  render() {
    return (
      <header className="header" id="header">
        <div className="header-main">
          <Link to="/" className="header-main-img">
            <img src={logo} />
          </Link>

          <div className="header-main-btns">
            <HashLink to="/#homeAbout" behavior="smooth">
              ABOUT
            </HashLink>
            <HashLink to="/#member" behavior="smooth">
              TEAM
            </HashLink>
            <HashLink to="/#news" behavior="smooth">
              NEWS
            </HashLink>
            <HashLink to="/#contact" behavior="smooth">
              CONTACT
            </HashLink>
          </div>

          <div
            className="header-main-burger"
            onClick={(event) => this.coverChange(event)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="header-menu">
          <HashLink to='/#homeAbout'  behavior='smooth'>
            ABOUT
          </HashLink>
          <HashLink to='/#member'     behavior='smooth'>
            TEAM
          </HashLink>
          <HashLink to='/#news'       behavior='smooth'>
            NEWS
          </HashLink>
          <HashLink to='/#contact'    behavior='smooth'>
            CONTACT
          </HashLink>
        </div>
      </header>
    );
  }
}

export default Header;
